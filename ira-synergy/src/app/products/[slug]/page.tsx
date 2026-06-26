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

  // Since you want 0 latency, we completely skip the Supabase fetch here too 
  // and directly use the 34 products we just downloaded into src/data/products.ts.
  let isFromDb = false;

  return (
    <ProductDetailClient
      params={params}
      initialProducts={initialProducts}
      isFromDb={isFromDb}
    />
  );
}
