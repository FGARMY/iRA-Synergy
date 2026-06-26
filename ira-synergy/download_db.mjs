import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabase = createClient('https://ikmfcmdkjuqakvszrtxs.supabase.co', 'sb_publishable_hrCGqsbG2FaIyrp4jvaH6A_K-3mx8Jx');

async function download() {
  console.log("Fetching products from Supabase...");
  const { data: products, error } = await supabase.from('products').select('*');
  if (error) {
    console.error("Error:", error);
    return;
  }
  
  console.log(`Fetched ${products.length} products.`);
  
  const mapped = products.map((dbP) => ({
    id: dbP.id,
    slug: dbP.slug,
    name: dbP.name,
    category: dbP.category,
    description: dbP.description,
    shortDescription: dbP.short_description || "",
    features: dbP.features || [],
    specs: dbP.specs || [],
    certifications: dbP.certifications || [],
    images: dbP.images || [],
    price: dbP.price || "On Request",
    inStock: dbP.in_stock ?? true,
    badge: dbP.badge || undefined,
    relatedProductSlugs: dbP.related_product_slugs || [],
    brochureUrl: dbP.brochure_url || undefined,
  }));
  
  const outputPath = path.join(__dirname, 'src', 'data', 'products.ts');
  const fileContent = `export const products = ${JSON.stringify(mapped, null, 2)};\n`;
  
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log("Successfully overwrote src/data/products.ts with Supabase data!");
}

download();
