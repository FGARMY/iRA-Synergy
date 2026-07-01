import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ikmfcmdkjuqakvszrtxs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_hrCGqsbG2FaIyrp4jvaH6A_K-3mx8Jx";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testQuery() {
  console.log("Fetching one full product...");
  const { data, error } = await supabase.from("products").select("*").limit(1);
  if (error) {
    console.error("Query failed:", error);
  } else {
    console.log("Full database product keys & values:", JSON.stringify(data[0], null, 2));
  }
}

testQuery();
