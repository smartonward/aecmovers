export default function Stats() {
  const statsData = [
    { title: "Assam ⇄ Pune", subtitle: "Direct linehaul corridor" },
    { title: "5-7 days", subtitle: "Guaranteed express transit" },
    { title: "100% Safe", subtitle: "Care-first parcel & FTL" },
    { title: "PAN-India", subtitle: "Launching nationwide soon 🚀" },
    { title: "23+ Years", subtitle: "Trusted logistics experience" },
  ];

  return (
    <div className="stats container reveal">
      <div className="stats-grid">
        <div className="stats-marquee-inner">
          {/* Render the array twice to create a seamless infinite scrolling effect */}
          {[...statsData, ...statsData].map((item, index) => (
            <div className="stat" key={index}>
              <b>{item.title}</b>
              <span>{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
