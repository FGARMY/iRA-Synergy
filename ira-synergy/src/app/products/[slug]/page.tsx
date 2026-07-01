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
  let initialProducts = staticProducts as Product[];
  let isFromDb = false;

  // We bypass server-side fetching here to prevent oversized server-side payloads.
  // The client-side ProductsProvider will query and display live details.
  return (
    <ProductDetailClient
      params={params}
      initialProducts={initialProducts}
      isFromDb={isFromDb}
    />
  );
}
