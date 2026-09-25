"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSuccess(false);
      setError("");
    };
    window.addEventListener("openQuoteModal", handleOpen);
    return () => window.removeEventListener("openQuoteModal", handleOpen);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      state: formData.get("state"),
      additionalInfo: formData.get("additionalInfo"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit request.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Close modal">
          <X size={24} />
        </button>

        {success ? (
          <div className="modal-success">
            <CheckCircle2 size={48} color="var(--cyan)" />
            <h3>Request Received</h3>
            <p>Thank you for choosing Assam Express! Our team will contact you shortly.</p>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Done
            </button>
          </div>
        ) : (
          <div className="modal-form-container">
            <h2>Get a Free Quote</h2>
            <p>Fill out the details below and we&apos;ll get back to you with the best rates.</p>

            {error && <div className="modal-error">{error}</div>}

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Contact No. *</label>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(10, 15, 43, 0.15)", borderRadius: "12px", background: "var(--ice)", overflow: "hidden" }} className="phone-wrapper">
                    <span style={{ paddingLeft: "16px", color: "var(--navy)", fontWeight: "600", fontSize: "14px" }}>+91</span>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="9876543210" 
                      pattern="[0-9]{10}"
                      maxLength={10}
                      minLength={10}
                      title="Please enter a valid 10-digit mobile number"
                      style={{ border: "none", background: "transparent", paddingLeft: "8px", width: "100%", outline: "none", borderRadius: "0", boxShadow: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="state">Location (State) *</label>
                  <select id="state" name="state" required defaultValue="" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 15, 43, 0.15)", fontSize: "14px", fontFamily: "inherit", outline: "none", backgroundColor: "var(--ice)", color: "var(--ink)", appearance: "auto" }}>
                    <option value="" disabled>Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo" 
                  placeholder="Any extra details about your cargo..." 
                  rows={3} 
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(10, 15, 43, 0.15)", fontSize: "14px", fontFamily: "inherit", resize: "vertical", outline: "none", backgroundColor: "var(--ice)", color: "var(--ink)" }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                {loading ? <Loader2 className="spinner" size={20} /> : "Submit Request"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
