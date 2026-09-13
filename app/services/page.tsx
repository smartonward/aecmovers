import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTruck from "@/components/ScrollTruck";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      num: "",
      title: "Full Truck Load (Assam ⇄ Pune)",
      desc: "Dedicated non-stop linehaul vehicle movement connecting Assam (Guwahati) and Pune for major shipments. Our FTL services guarantee exclusive use of the truck, ensuring faster transit times and zero risk of cargo mix-ups. Ideal for bulk goods, large-scale commercial transfers, and industrial materials.",
      imgSrc: "/services/media_1789239748331.jpg",
      bgColor: "rgba(79, 184, 214, 0.08)",
    },
    {
      num: "",
      title: "Part Load & Parcel Cargo",
      desc: "Flexible, cost-effective transport for commercial parcels and medium consignments between Assam and Pune. You only pay for the space you use, making it perfect for smaller businesses, distributors, and individual bulk shipments without compromising on delivery reliability.",
      imgSrc: "/services/media_1789239748308.jpg",
      bgColor: "rgba(36, 120, 205, 0.08)",
    },
    {
      num: "",
      title: "Direct Express Linehaul",
      desc: "Priority movement with direct scheduled transit avoiding unnecessary multi-city transshipment delays. By bypassing traditional hub-and-spoke models, our express linehaul drastically reduces handling points, cutting down transit times by days compared to standard operators.",
      imgSrc: "/services/media_1789239748342.jpg",
      bgColor: "rgba(255, 60, 0, 0.08)",
    },
    {
      num: "",
      title: "B2B Commercial Logistics",
      desc: "Scheduled supply-chain and recurring cargo distribution between Western India industrial hubs and the Northeast. We seamlessly integrate into your corporate supply chain, offering regular dispatch schedules, structured billing, and dedicated account management for B2B partners.",
      imgSrc: "/services/media_1789239748240.jpg",
      bgColor: "rgba(10, 15, 43, 0.08)",
    },
    {
      num: "",
      title: "Secure Loading & Handling",
      desc: "Specialized care, waterproof tarpaulin protection, and attentive cargo monitoring from origin to destination. Our professional ground team ensures every box and pallet is loaded strategically to prevent transit damage, providing total peace of mind for fragile or high-value shipments.",
      imgSrc: "/services/media_1789239748188.jpg",
      bgColor: "rgba(154, 166, 184, 0.15)",
    },
  ];

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="services-page">
        {/* Page Header */}
        <section className="services-hero">
          <div className="container">
            <div className="section-tag reveal">Our Corridors</div>
            <h1 className="reveal">
              Specialized Cargo Solutions for <span>Assam ⇄ Pune</span>
            </h1>
            <p className="services-hero-copy reveal">
              Dependable cargo transportation engineered around the high-volume Assam to Pune route,
              backed by responsive dispatch and personalized support.
            </p>
          </div>
        </section>

        {/* Route Wrapper for the animation */}
        <div className="truck-route-wrapper">
          <ScrollTruck />

          {/* Zig-Zag Services Section */}
          <section className="zigzag-section">
            <div className="container">
              {services.map((service, index) => {
                const isEven = index % 2 !== 0;

                return (
                  <div className={`zigzag-row reveal ${isEven ? 'row-reversed' : ''}`} key={service.num}>
                    <div className="zigzag-visual" style={{ backgroundColor: service.bgColor }}>
                      <Image src={service.imgSrc} alt={service.title} fill style={{ objectFit: 'cover' }} />
                    </div>

                    <div className="zigzag-content">
                      <span className="service-number">{service.num}</span>
                      <h2>{service.title}</h2>
                      <p>{service.desc}</p>
                      <ul className="service-features">
                        <li>✓ Direct Transport Route</li>
                        <li>✓ Real-time Monitoring</li>
                        <li>✓ Professional Handling</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* PAN India Banner above Footer */}
        <section className="pan-india-banner-section reveal">
          <div className="container">
            <div className="pan-india-banner-large">
              <div className="pan-india-content">
                <span className="banner-badge">06</span>
                <h2>Launching PAN India Soon</h2>
                <p>
                  Currently focused on the high-demand Assam ⇄ Pune lifeline, but our vision doesn't stop there.
                  We are expanding our network to cover nationwide state networks soon!
                </p>
              </div>
              <div className="pan-india-action">
                <button
                  className="btn btn-primary"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Image Marquee */}
        <section className="image-marquee-section">
          <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-tag reveal">Gallery</div>
            <h2 className="section-title reveal">Our Operations in Action</h2>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-container">
              {[
                "/how-it-works/step1.jpg",
                "/how-it-works/step2.jpg",
                "/how-it-works/step3.jpg",
                "/how-it-works/step4.jpg",
                "/services/media_1789239748188.jpg",
                "/services/media_1789239748240.jpg",
                "/services/media_1789239748308.jpg",
                "/services/media_1789239748331.jpg",
                "/services/extra1.jpg",
                "/services/extra2.jpg",
                "/services/extra3.jpg",
                "/services/extra4.jpg",
                "/how-it-works/step1.jpg",
                "/how-it-works/step2.jpg",
                "/how-it-works/step3.jpg",
                "/how-it-works/step4.jpg",
                "/services/media_1789239748188.jpg",
                "/services/media_1789239748240.jpg",
                "/services/media_1789239748308.jpg",
                "/services/media_1789239748331.jpg",
                "/services/extra1.jpg",
                "/services/extra2.jpg",
                "/services/extra3.jpg",
                "/services/extra4.jpg"
              ].map((src, i) => (
                <div className="marquee-item" key={i}>
                  <Image src={src} alt={`Gallery image ${i}`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 300px, 400px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
