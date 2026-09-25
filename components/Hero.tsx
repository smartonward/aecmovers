"use client";

import Link from "next/link";
import IndiaMapCard from "@/components/IndiaMapCard";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      heroRef.current.style.setProperty('--mouse-x', x.toString());
      heroRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="orbit" aria-hidden="true" />
      <div className="route" aria-hidden="true">
        <svg viewBox="0 0 500 300" fill="none">
          <path
            d="M30 240 C115 190, 120 90, 215 112 S330 245, 468 70"
            stroke="#4FA0E8"
            strokeWidth="2"
            strokeDasharray="8 9"
          />
          <circle cx="30" cy="240" r="7" fill="#fff" />
          <circle cx="215" cy="112" r="7" fill="#fff" />
          <circle cx="468" cy="70" r="7" fill="#fff" />
          <path
            d="M50 275 C160 235, 190 180, 280 190 S390 245, 490 175"
            stroke="#2478CD"
            strokeWidth="1"
            strokeDasharray="4 12"
            opacity=".65"
          />
        </svg>
      </div>

      <div className="container hero-content">
        <div>
          <h1>
            Direct Cargo Movement
            <br />
            <em>Assam ⇄ Pune Express</em>
          </h1>
          <p className="hero-copy">
            Dedicated direct linehaul transportation between Assam (Guwahati) and Pune (Maharashtra).
            Fast transit, care-first handling, and responsive tracking from pickup to delivery.
          </p>

          <div className="hero-corridor-badge">
            <span>📍 <strong>Guwahati Hub</strong> ⇄ <strong>Pune Hub</strong></span>
            <span className="soon-pill">Launching PAN India Soon 🚀</span>
          </div>

          <div className="actions">
            <button
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new Event("openQuoteModal"))}
            >
              Book Assam ⇄ Pune Cargo <span>↗</span>
            </button>
            <Link className="btn btn-ghost" href="/services">
              View Route Services <span>→</span>
            </Link>
          </div>
        </div>

        {/* Pan-India & Assam-Pune Route Visualizer */}
        <IndiaMapCard />
      </div>
    </section>
  );
}
