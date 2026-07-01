import { supabase } from "@/lib/supabase";
import { products as staticProducts } from "@/data/products";
import ProductsClient from "./ProductsClient";
import type { Product } from "@/types";

export const revalidate = 60; // Revalidate every minute

export default async function ProductsPage() {
  let initialProducts = staticProducts as Product[];
  let isFromDb = false;

  // We bypass server-side fetching here because the database contains large base64 images,
  // causing the pre-rendered page payload to exceed Vercel's 19.07MB limit (producing FALLBACK_BODY_TOO_LARGE).
  // The client-side ProductsProvider will successfully fetch the live database products instead.
  return <ProductsClient initialProducts={initialProducts} isFromDb={isFromDb} />;
}
