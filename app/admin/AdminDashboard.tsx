"use client";

import { logoutAction } from "./actions";
import { useRouter } from "next/navigation";

type Quote = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  state: string;
  additional_info: string;
  created_at: string;
};

export default function AdminDashboard({ quotes }: { quotes: Quote[] }) {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.refresh();
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto", color: "var(--white, #fff)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <h1 style={{ fontSize: "28px", marginBottom: "5px" }}>Admin Dashboard</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Manage your quote requests</p>
        </div>
        <button onClick={handleLogout} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", transition: "all 0.2s", fontWeight: "bold" }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}>
          Logout
        </button>
      </div>

      <div style={{ overflowX: "auto", background: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", padding: "2px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "15px" }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.05)" }}>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Date</th>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Name</th>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Phone</th>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Email</th>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>State</th>
              <th style={{ padding: "16px", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Info</th>
            </tr>
          </thead>
          <tbody>
            {quotes.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: "40px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
                  No quote requests found.
                </td>
              </tr>
            ) : (
              quotes.map((quote) => (
                <tr key={quote.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={{ padding: "16px", whiteSpace: "nowrap" }}>{new Date(quote.created_at).toLocaleDateString()} {new Date(quote.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>{quote.first_name} {quote.last_name || ""}</td>
                  <td style={{ padding: "16px" }}><a href={`tel:${quote.phone}`} style={{ color: "var(--cyan, #00BCD4)", textDecoration: "none" }}>{quote.phone}</a></td>
                  <td style={{ padding: "16px" }}>{quote.email ? <a href={`mailto:${quote.email}`} style={{ color: "var(--cyan, #00BCD4)", textDecoration: "none" }}>{quote.email}</a> : <span style={{ color: "rgba(255,255,255,0.3)" }}>N/A</span>}</td>
                  <td style={{ padding: "16px" }}>{quote.state}</td>
                  <td style={{ padding: "16px", maxWidth: "250px" }}>
                    <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={quote.additional_info}>
                      {quote.additional_info || <span style={{ color: "rgba(255,255,255,0.3)" }}>N/A</span>}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
