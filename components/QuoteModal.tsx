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
                  <input type="tel" id="phone" name="phone" required placeholder="+91 00000 00000" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">Location (State) *</label>
                  <input type="text" id="state" name="state" required placeholder="Maharashtra" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo" 
                  placeholder="Any extra details about your cargo..." 
                  rows={3} 
                  style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid rgba(10, 15, 43, 0.2)", fontSize: "15px", fontFamily: "inherit", resize: "vertical", outline: "none" }}
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
