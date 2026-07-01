import { supabase } from "@/lib/supabase";
import { products as staticProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import type { Product } from "@/types";

export const revalidate = 60; // Revalidate every minute

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  let initialProduct: Product | null = null;

  const isSupabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", decodedSlug)
        .maybeSingle();

      if (data && !error) {
        initialProduct = {
          id: data.id,
          slug: data.slug,
          name: data.name,
          category: data.category,
          description: data.description,
          shortDescription: data.short_description || "",
          features: data.features || [],
          specs: data.specs || [],
          certifications: data.certifications || [],
          images: data.images || [],
          price: data.price || "On Request",
          inStock: data.in_stock ?? true,
          badge: data.badge || undefined,
          relatedProductSlugs: data.related_product_slugs || [],
          brochureUrl: data.brochure_url || undefined,
        };
      }
    } catch (e) {
      console.error("Failed to fetch product detail from Supabase:", e);
    }
  }

  // Fallback to static data if not found in db
  if (!initialProduct) {
    initialProduct = (staticProducts as Product[]).find(p => p.slug === decodedSlug) || null;
  }

  return (
    <ProductDetailClient
      params={params}
      initialProduct={initialProduct}
    />
  );
}
