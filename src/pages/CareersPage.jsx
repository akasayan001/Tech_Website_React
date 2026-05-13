import { useState } from "react";
import { useInView } from "../hooks/useInView";
import "./CareersPage.css";

const JOBS = [
  { title: "Senior AI/ML Engineer", dept: "Engineering", location: "Kolkata / Remote", type: "Full-time", tags: ["Python", "PyTorch", "MLOps"] },
  { title: "Full Stack Developer", dept: "Engineering", location: "Kolkata / Bangalore", type: "Full-time", tags: ["React", "Node.js", ".NET Core"] },
  { title: "Flutter Developer", dept: "Mobile", location: "Remote", type: "Full-time", tags: ["Flutter", "Dart", "Firebase"] },
  { title: "Cloud Architect", dept: "Infrastructure", location: "Kolkata", type: "Full-time", tags: ["AWS", "Kubernetes", "Terraform"] },
  { title: "UX/UI Designer", dept: "Design", location: "Kolkata / Remote", type: "Full-time", tags: ["Figma", "Design Systems", "Research"] },
  { title: "Cybersecurity Analyst", dept: "Security", location: "Kolkata", type: "Full-time", tags: ["Penetration Testing", "Zero-trust", "SOC2"] },
  { title: "Odoo Developer", dept: "Engineering", location: "Kolkata", type: "Full-time", tags: ["Python", "Odoo", "PostgreSQL"] },
  { title: "Business Development Manager", dept: "Sales", location: "Kolkata / Bangalore", type: "Full-time", tags: ["B2B", "Tech Sales", "CRM"] },
];

const PERKS = [
  { icon: "◈", title: "Remote-Friendly", desc: "Work from anywhere. We care about output, not presence." },
  { icon: "◎", title: "Learning Budget", desc: "₹50,000/year for courses, certifications, and conferences." },
  { icon: "⬡", title: "Health Insurance", desc: "Comprehensive medical, dental, and vision for you and family." },
  { icon: "◇", title: "Equity", desc: "We believe in shared ownership. All full-time hires get stock options." },
];

const DEPT_COLORS = {
  Engineering: "#c8ff00",
  Mobile: "#00e5ff",
  Infrastructure: "#ff6b35",
  Design: "#a855f7",
  Security: "#f59e0b",
  Sales: "#10b981",
};

export default function CareersPage() {
  const [ref, inView] = useInView(0.05);
  const [perksRef, perksInView] = useInView();

  return (
    <div className="page careers-page">
      <div className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__glow page-hero__glow--1" />
        <div className="page-hero__glow page-hero__glow--2" />
        <div className="page-hero__content">
          <span className="section-tag">Join the Team</span>
          <h1 className="page-hero__title">Build the <span>Future With Us</span></h1>
          <p className="page-hero__sub">We're always looking for exceptional engineers, designers, and operators who love hard problems and ambitious goals.</p>
        </div>
      </div>

      <section className="perks-section" ref={perksRef}>
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">Why Projukti Vision</span>
          <h2 className="section-title">Life at <em>PV</em></h2>
        </div>
        <div className="perks-grid">
          {PERKS.map((p, i) => (
            <div className={`perk-card ${perksInView ? "animate-in" : ""}`} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="perk-card__icon">{p.icon}</div>
              <h3 className="perk-card__title">{p.title}</h3>
              <p className="perk-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="jobs-section">
        <div className="section-header">
          <span className="section-tag">Open Positions</span>
          <h2 className="section-title">Where You <em>Fit In</em></h2>
        </div>
        <div className="jobs-list" ref={ref}>
          {JOBS.map((j, i) => (
            <div className={`job-card ${inView ? "animate-in" : ""}`} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="job-card__main">
                <div>
                  <span className="job-card__dept" style={{ color: DEPT_COLORS[j.dept] }}>{j.dept}</span>
                  <h3 className="job-card__title">{j.title}</h3>
                  <div className="job-card__tags">
                    {j.tags.map((t) => <span key={t} className="job-tag">{t}</span>)}
                  </div>
                </div>
                <div className="job-card__meta">
                  <span className="job-meta-item">📍 {j.location}</span>
                  <span className="job-meta-item">🕐 {j.type}</span>
                </div>
              </div>
              <button className="job-card__apply">Apply →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-cta">
        <div className="careers-cta__inner">
          <span className="section-tag">Don't See a Fit?</span>
          <h2 className="careers-cta__title">We'd Still Love to <span>Hear From You</span></h2>
          <p>Send your resume and a note about what you'd like to build. We're always growing.</p>
          <a href="mailto:careers@projuktivision.com" className="btn btn--primary">Send Open Application →</a>
        </div>
      </section>
    </div>
  );
}
