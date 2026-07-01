import { supabase } from "@/lib/supabase";
import { products as staticProducts } from "@/data/products";
import ProductsClient from "./ProductsClient";
import type { Product } from "@/types";

export const revalidate = 60; // Revalidate every minute

export default async function ProductsPage() {
  let initialProducts = staticProducts as Product[];
  let isFromDb = false;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("id, slug, name, category, images, badge, short_description, price, in_stock")
        .order("created_at", { ascending: true });

      if (data && !error && data.length > 0) {
        initialProducts = data.map((dbP: any) => ({
          id: dbP.id,
          slug: dbP.slug,
          name: dbP.name,
          category: dbP.category,
          description: "", // listing page doesn't need full description
          shortDescription: dbP.short_description || "",
          features: [],
          specs: [],
          certifications: [],
          images: dbP.images || [],
          price: dbP.price || "On Request",
          inStock: dbP.in_stock ?? true,
          badge: dbP.badge || undefined,
          relatedProductSlugs: [],
          brochureUrl: undefined,
        }));
        isFromDb = true;
      }
    } catch (e) {
      console.error("Failed to fetch products from Supabase server-side:", e);
    }
  }

  return <ProductsClient initialProducts={initialProducts} isFromDb={isFromDb} />;
}
