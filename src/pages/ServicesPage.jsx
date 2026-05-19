import { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import "./ServicesPage.css";

const SERVICES = [
  {
    tag: "01",
    title: "Custom Web & API Development",
    desc: "We build robust and scalable web applications using Microsoft .NET Core and powerful RESTful APIs that enable seamless integration between systems and enhance data interactions.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop",
  },
  {
    tag: "02",
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for Android and iOS using Flutter — covering FinTech wallets with secure payments and tokenization, and restaurant ordering & loyalty platforms.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=700&auto=format&fit=crop",
  },
  {
    tag: "03",
    title: "Digital Wallet Enablement",
    desc: "Secure in-app card provisioning for Google Wallet and Apple Wallet, leveraging network-grade tokenization, device binding, and multi-tenant architecture for fast, compliant, contactless payments.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&auto=format&fit=crop",
  },
  {
    tag: "04",
    title: "Back-Office Process Automation",
    desc: "Enterprise-grade distributed systems managing hundreds of databases and millions of documents — high availability, fault-tolerant workflow orchestration, and scalable analytics for year-round operations.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&auto=format&fit=crop",
  },
  {
    tag: "05",
    title: "Enterprise Reporting & Analytics",
    desc: "Multi-format reporting platforms (RDLC, PDF via iText 7, Excel, CSV, HTML, React dashboards) with dynamic generation from millions of records, automated distribution, and role-based access.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&auto=format&fit=crop",
  },
  {
    tag: "06",
    title: "HR Solutions & Odoo Customization",
    desc: "Specialized HR systems for garment & apparel industries in collaboration with BHS Infotech, plus tailored Odoo customization to optimize your business processes from analysis to deployment.",
    img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&auto=format&fit=crop",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "Deep-dive into your business, goals, and technical landscape. We align on vision before writing a single line of code." },
  { step: "02", title: "Strategy", desc: "Architecture, roadmap, and success metrics. We design the system before building it." },
  { step: "03", title: "Build", desc: "Iterative delivery with weekly demos. Quality engineering at every layer — frontend, backend, infrastructure." },
  { step: "04", title: "Launch", desc: "Deployment, monitoring, and knowledge transfer. We don't disappear after go-live." },
];

const TESTIMONIALS = [
  {
    quote: "Projukti Vision revolutionized the way we do business. Their back-office automation system now processes millions of documents seamlessly — saving us enormous time and increasing our accuracy.",
    name: "John Doe",
    role: "CEO of ABC Company",
    avatar: "https://i.pravatar.cc/48?img=12",
  },
  {
    quote: "An outstanding team that truly understands what clients need. The digital wallet solution they built for us is both elegant and rock-solid in production — our customers love the seamless experience.",
    name: "Sarah Mitchell",
    role: "CTO of NovaCorp",
    avatar: "https://i.pravatar.cc/48?img=47",
  },
  {
    quote: "From the first discovery call to the final launch, the team was professional, communicative, and delivered beyond our expectations. Their Flutter mobile app transformed our restaurant operations.",
    name: "Raj Patel",
    role: "Founder of VeriStack",
    avatar: "https://i.pravatar.cc/48?img=33",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="testimonials">
      <div className="testimonials__bg" />
      <div className="testimonials__inner">
        <div className="testimonials__card">
          <div className="testimonials__quote-mark">"</div>
          <blockquote className="testimonials__text">
            "{t.quote}" — {t.name}, {t.role}
          </blockquote>
          <div className="testimonials__author">
            <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
            <div>
              <span className="testimonials__name">{t.name}</span>
              <span className="testimonials__role">{t.role}</span>
            </div>
          </div>
        </div>
        <button className="testimonials__nav testimonials__nav--prev" onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>‹</button>
        <button className="testimonials__nav testimonials__nav--next" onClick={() => setActive((active + 1) % TESTIMONIALS.length)}>›</button>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [cardsRef, cardsInView] = useInView(0.05);
  const [processRef, processInView] = useInView(0.1);

  return (
    <div className="svc-page">
      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero__bg" />
        <div className="svc-hero__content">
          <h1 className="svc-hero__title">Services</h1>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="svc-cards-section" ref={cardsRef}>
        <div className="svc-cards">
          {SERVICES.map((s, i) => (
            <div
              className={`svc-card ${cardsInView ? "svc-card--in" : ""}`}
              key={i}
              style={{ "--d": `${i * 0.12}s` }}
            >
              <div className="svc-card__img" style={{ backgroundImage: `url(${s.img})` }} />
              <div className="svc-card__body">
                <span className="svc-card__tag">{s.tag}</span>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <Link to="/contact" className="svc-card__link">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="svc-process" style={{ background: "#f8f8fb" }}>
        <div className="svc-process__header">
          <span className="svc-tag svc-tag--dark">Why Choose Us</span>
          <h2 className="svc-process__title">Our <em>Value Proposition</em></h2>
        </div>
        <div className="svc-process__grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {[
            { step: "✔", title: "Client-Centric Approach", desc: "Projukti Vision prioritizes understanding client needs to deliver solutions that truly fit business goals." },
            { step: "✔", title: "End-to-End Delivery", desc: "From concept to deployment and beyond, we support clients throughout the entire technology lifecycle." },
            { step: "✔", title: "Innovation & Quality", desc: "Focused on building scalable, efficient, and reliable digital products that stand the test of time." },
            { step: "✔", title: "Agile & Flexible Team", desc: "A dedicated team capable of adapting to changing project requirements and delivering timely results." },
          ].map((p, i) => (
            <div className="svc-process-card svc-process-card--in" key={i} style={{ "--d": `${i * 0.12}s` }}>
              <div className="svc-process-card__step">{p.step}</div>
              <h3 className="svc-process-card__title">{p.title}</h3>
              <p className="svc-process-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials slider ── */}
      <Testimonials />

      {/* ── Process ── */}
      <section className="svc-process" ref={processRef}>
        <div className="svc-process__header">
          <span className="svc-tag svc-tag--dark">How We Work</span>
          <h2 className="svc-process__title">Our <em>Process</em></h2>
        </div>
        <div className="svc-process__grid">
          {PROCESS.map((p, i) => (
            <div
              className={`svc-process-card ${processInView ? "svc-process-card--in" : ""}`}
              key={i}
              style={{ "--d": `${i * 0.12}s` }}
            >
              {i < PROCESS.length - 1 && <span className="svc-process-card__arrow">→</span>}
              <div className="svc-process-card__step">{p.step}</div>
              <h3 className="svc-process-card__title">{p.title}</h3>
              <p className="svc-process-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta__inner">
          <span className="svc-tag">Get Started</span>
          <h2 className="svc-cta__title">Ready to build something <span>remarkable?</span></h2>
          <p className="svc-cta__sub">Tell us your challenge. We'll architect the solution.</p>
          <Link to="/contact" className="svc-btn-primary">Start a Conversation →</Link>
        </div>
      </section>
    </div>
  );
}