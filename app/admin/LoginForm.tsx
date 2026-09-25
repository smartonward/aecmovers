"use client";

import { useState } from "react";
import { loginAction } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);
    if (result.success) {
      router.refresh();
    } else {
      setError(result.error || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", width: "100%", margin: "0 auto", padding: "30px", background: "white", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", color: "#0A192F" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px", color: "var(--primary-color, #0A192F)" }}>Admin Login</h2>
      {error && <p style={{ color: "red", textAlign: "center", marginBottom: "15px", fontSize: "14px" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", fontSize: "14px" }}>Username</label>
          <input type="text" name="username" required style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #ddd", fontSize: "15px" }} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", fontSize: "14px" }}>Password</label>
          <input type="password" name="password" required style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #ddd", fontSize: "15px" }} />
        </div>
        <button type="submit" disabled={loading} style={{ background: "var(--cyan, #00BCD4)", color: "white", padding: "12px", border: "none", borderRadius: "5px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", display: "flex", justifyContent: "center", marginTop: "10px", transition: "opacity 0.2s" }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
          {loading ? <Loader2 className="spinner" size={20} /> : "Login"}
        </button>
      </form>
    </div>
  );
}
