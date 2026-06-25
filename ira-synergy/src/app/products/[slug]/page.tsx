import { supabase } from "@/lib/supabase";
import { products as staticProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export const revalidate = 60; // Revalidate every minute

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let initialProducts = staticProducts;
  let isFromDb = false;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (isSupabaseConfigured) {
    try {
      const { data: dbProducts, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (dbProducts && !error && dbProducts.length > 0) {
        initialProducts = dbProducts.map((dbP: any) => ({
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
        isFromDb = true;
      }
    } catch (e) {
      console.warn("Supabase fetch failed during SSR", e);
    }
  }

  return (
    <ProductDetailClient
      params={params}
      initialProducts={initialProducts}
      isFromDb={isFromDb}
    />
  );
}
