import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import LoginForm from "./LoginForm";
import AdminDashboard from "./AdminDashboard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("admin_auth");

  // Show login form if not authenticated
  if (!authCookie || authCookie.value !== "true") {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--primary-color, #0A192F)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <LoginForm />
      </div>
    );
  }

  // Fetch data from Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--primary-color, #0A192F)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        <div style={{ background: "rgba(255,0,0,0.1)", padding: "20px", borderRadius: "10px", border: "1px solid red" }}>
          Error: Supabase credentials missing in environment variables.
        </div>
      </div>
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // We assume the table is called "quotes" based on the API route
  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "var(--primary-color, #0A192F)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
        <div style={{ background: "rgba(255,0,0,0.1)", padding: "20px", borderRadius: "10px", border: "1px solid red" }}>
          Error fetching quotes: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--primary-color, #0A192F)", paddingTop: "100px", paddingBottom: "50px" }}>
      <AdminDashboard quotes={data || []} />
    </div>
  );
}
