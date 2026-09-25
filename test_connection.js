import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cqztbemtfvysmhktocop.supabase.co";
const supabaseAnonKey = "sb_publishable_OmuPgs8ZSxhMH5_rJlrZbQ_afjuKPDq";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  const { data, error } = await supabase.from("quotes").select("*");
  console.log("Data:", data);
  console.log("Error:", error);
}

test();
