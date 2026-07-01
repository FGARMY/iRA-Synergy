import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ikmfcmdkjuqakvszrtxs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hrCGqsbG2FaIyrp4jvaH6A_K-3mx8Jx";

// Note: Ensure your Supabase anon key has policies allowing bucket creation/upload,
// or that the bucket "product-images" is created and public in the dashboard.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function decodeBase64Image(dataString: string) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    return null;
  }
  return {
    type: matches[1],
    data: Buffer.from(matches[2], "base64"),
  };
}

async function runMigration() {
  console.log("Starting Supabase Image Migration...");

  // 1. Ensure public bucket exists
  console.log("Ensuring 'product-images' bucket is created and public...");
  try {
    const { data: bucketData, error: bucketError } = await supabase.storage.createBucket("product-images", {
      public: true,
      allowedMimeTypes: ["image/png", "image/jpeg", "image/webp"],
    });
    if (bucketError) {
      if (bucketError.message.includes("already exists")) {
        console.log("Bucket 'product-images' already exists, proceeding.");
      } else {
        console.warn("Could not ensure bucket creation:", bucketError.message);
      }
    } else {
      console.log("Created 'product-images' public bucket successfully.");
    }
  } catch (e: any) {
    console.warn("Bucket creation failed, trying to proceed anyway:", e.message);
  }

  // 2. Fetch all products
  console.log("Fetching products list...");
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("id, slug, name, images");

  if (productsError) {
    console.error("Failed to fetch products:", productsError);
    return;
  }

  console.log(`Found ${products.length} products to check.`);

  for (const product of products) {
    if (!product.images || !Array.isArray(product.images) || product.images.length === 0) {
      continue;
    }

    let hasBase64 = false;
    const updatedImages: string[] = [];

    console.log(`Checking [${product.id}] "${product.name}"...`);

    for (let idx = 0; idx < product.images.length; idx++) {
      const img = product.images[idx];
      if (img.startsWith("data:image/")) {
        hasBase64 = true;
        console.log(`  -> Image #${idx + 1} is base64. Converting and uploading...`);

        const decoded = decodeBase64Image(img);
        if (!decoded) {
          console.error(`  [Error] Failed to decode image #${idx + 1}`);
          updatedImages.push(img); // keep original fallback
          continue;
        }

        // Detect extension
        let ext = "png";
        if (decoded.type.includes("jpeg") || decoded.type.includes("jpg")) ext = "jpg";
        else if (decoded.type.includes("webp")) ext = "webp";

        const filename = `${product.slug}-${idx}-${Date.now()}.${ext}`;

        // Upload to storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filename, decoded.data, {
            contentType: decoded.type,
            cacheControl: "3600",
            upsert: true,
          });

        if (uploadError) {
          console.error(`  [Error] Upload failed for #${idx + 1}:`, uploadError.message);
          updatedImages.push(img); // keep original fallback
          continue;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(filename);

        console.log(`  [Success] Uploaded to: ${urlData.publicUrl}`);
        updatedImages.push(urlData.publicUrl);
      } else {
        updatedImages.push(img);
      }
    }

    if (hasBase64) {
      console.log(`  Updating product database row...`);
      const { error: updateError } = await supabase
        .from("products")
        .update({ images: updatedImages })
        .eq("id", product.id);

      if (updateError) {
        console.error(`  [Error] Failed to update product database row:`, updateError.message);
      } else {
        console.log(`  [Success] Successfully migrated and updated database row.`);
      }
    }
  }

  console.log("Migration complete!");
}

runMigration().catch(console.error);
