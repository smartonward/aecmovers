"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrapper">
              <Logo />
            </div>
            <p>
              Specialized express cargo transportation between Assam (Guwahati) and Pune (Maharashtra).
              Dependable linehaul service with PAN-India expansion launching soon.
            </p>
          </div>

          <div>
            <h4>Corridors</h4>
            <Link href="/services">Assam to Pune Direct</Link>
            <Link href="/services">Pune to Assam Direct</Link>
            <Link href="/about">Guwahati Hub</Link>
            <Link href="/about">Pune Hub</Link>
            <Link href="/services">PAN-India (Launching Soon)</Link>
          </div>

          <div>
            <h4>Services</h4>
            <Link href="/services">Full Truck Load (FTL)</Link>
            <Link href="/services">Part Load Cargo (PTL)</Link>
            <Link href="/services">Direct Express Transit</Link>
            <Link href="/how-it-works">How It Works</Link>
          </div>

          <div className="contact-column">
            <h4 className="contact-heading">CONTACT</h4>
            
            <div style={{ marginBottom: "24px" }}>
              <span className="contact-label">Samser Alam</span>
              <span className="contact-text">
                <a href="tel:+919006097444">+91 90060 97444</a>
                <a href="tel:+918969641695">+91 89696 41695</a>
              </span>
            </div>
            
            <div style={{ marginBottom: "24px" }}>
              <span className="contact-label">Pune Hub</span>
              <address className="contact-text">
                Vaishnavi PG, Marunji Road, Phase 1,<br />
                Hinjawadi Rajiv Gandhi Infotech Park,<br />
                Hinjawadi, Pune - 411057 (MH)
              </address>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <span className="contact-text">
                <a href="mailto:info@aecmovers.com">info@aecmovers.com</a>
              </span>
            </div>

            <button 
              className="contact-cta"
              onClick={() => window.dispatchEvent(new Event("openQuoteModal"))}
            >
              Request a quote <span>→</span>
            </button>
          </div>
        </div>

        <div className="copyright">
          <span>© 2026 Assam Express Cargo Movers. All rights reserved.</span>
          <span>Dedicated Assam ⇄ Pune Cargo Lifeline • Launching PAN-India Soon.</span>
        </div>
      </div>
    </footer>
  );
}
