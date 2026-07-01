import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ikmfcmdkjuqakvszrtxs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hrCGqsbG2FaIyrp4jvaH6A_K-3mx8Jx";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testQuery() {
  const { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.error("Query Error:", error);
  } else {
    console.log("Total products in DB:", products.length);
    products.forEach((p, idx) => {
      console.log(`${idx + 1}. [ID: ${p.id}] Slug: ${p.slug} - Name: ${p.name}`);
    });
  }
}

testQuery();
