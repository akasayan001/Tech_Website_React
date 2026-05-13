import { useState } from "react";
import { useInView } from "../hooks/useInView";
import "./WorkPage.css";

const PROJECTS = [
  { name: "NovaPay", category: "Fintech", tags: ["AI", "Fintech"], desc: "Real-time fraud detection engine processing 4M transactions/day with sub-10ms latency.", color: "#c8ff00", year: "2024", impact: "4M+ tx/day" },
  { name: "Orbital CMS", category: "SaaS", tags: ["SaaS", "Cloud"], desc: "Headless content platform serving 200+ enterprise clients globally with 99.99% uptime.", color: "#00e5ff", year: "2023", impact: "200+ clients" },
  { name: "Aether OS", category: "Security", tags: ["Security", "Systems"], desc: "Zero-trust operating layer for critical infrastructure networks in financial institutions.", color: "#ff6b35", year: "2023", impact: "15 banks" },
  { name: "DataNexus", category: "AI", tags: ["AI", "Data"], desc: "Unified data intelligence platform reducing analytics time from weeks to minutes.", color: "#a855f7", year: "2022", impact: "10x faster" },
  { name: "FleetMind", category: "IoT", tags: ["IoT", "Cloud"], desc: "Real-time fleet management for 50,000+ vehicles across Southeast Asia.", color: "#f59e0b", year: "2022", impact: "50k vehicles" },
  { name: "MediSync", category: "HealthTech", tags: ["HealthTech", "AI"], desc: "AI-powered clinical workflow system deployed in 30+ hospitals across India.", color: "#10b981", year: "2021", impact: "30+ hospitals" },
];

const CATEGORIES = ["All", "AI", "Fintech", "SaaS", "Cloud", "Security", "Data", "IoT", "HealthTech"];

export default function WorkPage() {
  const [active, setActive] = useState("All");
  const [listRef, listInView] = useInView(0.05);

  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <div className="page work-page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__glow page-hero__glow--1" />
        <div className="page-hero__glow page-hero__glow--2" />
        <div className="page-hero__content">
          <span className="section-tag">Selected Work</span>
          <h1 className="page-hero__title">Projects That <span>Define Industries</span></h1>
          <p className="page-hero__sub">A curated selection of the work we're most proud of — built with rigour, shipped with care.</p>
        </div>
      </div>

      <section className="work-section">
        <div className="work-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="work-list" ref={listRef}>
          {filtered.map((p, i) => (
            <div className={`work-card ${listInView ? "animate-in" : ""}`} key={p.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="work-card__num">0{i + 1}</div>
              <div className="work-card__body">
                <div className="work-card__meta">
                  <span className="work-card__category" style={{ color: p.color }}>{p.category}</span>
                  <span className="work-card__year">{p.year}</span>
                </div>
                <h3 className="work-card__name">{p.name}</h3>
                <p className="work-card__desc">{p.desc}</p>
              </div>
              <div className="work-card__impact">
                <span className="impact-value" style={{ color: p.color }}>{p.impact}</span>
                <span className="impact-label">Key Metric</span>
              </div>
              <div className="work-card__arrow" style={{ color: p.color }}>↗</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
