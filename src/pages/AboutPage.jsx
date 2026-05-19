import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import "./AboutPage.css";

const TEAM = [
  {
    name: "Saibal Sarkar",
    role: "CEO & Co-Founder",
    desc: "Founder and chief visionary, Saibal is the driving force behind Projukti Vision. With over 20 years of experience in the software industry, he is passionate about creating software that helps businesses succeed through digital transformation.",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
  {
    name: "Michelle Lee",
    role: "COO",
    desc: "Michelle has over 15 years of experience in the software industry and has played a key role in the success of the company. Her expertise in operations and management has helped BSAAS grow and expand its service offerings.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Aline Turner",
    role: "CTO",
    desc: "Our technical lead is passionate about creating innovative software solutions — from .NET Core architecture and Flutter mobile apps to distributed back-office systems processing millions of documents at scale.",
    avatar: "https://i.pravatar.cc/120?img=26",
  },
  {
    name: "Iris Johnson",
    role: "CFO",
    desc: "Iris brings a wealth of international experience to our company. Her financial expertise and strategic thinking have helped BSAAS make sound business decisions and achieve sustainable growth across all service verticals.",
    avatar: "https://i.pravatar.cc/120?img=44",
  },
];

const VALUES = [
  { icon: "◈", title: "Engineering Excellence", desc: "We set the bar high — not just for deliverables, but for code quality, system design, and long-term maintainability at enterprise scale." },
  { icon: "◎", title: "Client Partnership", desc: "We work embedded, not outsourced. Your wins are our wins — we share the urgency, the ambition, and the responsibility for outcomes." },
  { icon: "⬡", title: "Radical Transparency", desc: "No hidden timelines, no surprise pivots. We communicate early, often, and honestly throughout the entire project lifecycle." },
  { icon: "◇", title: "Continuous Learning", desc: "Technology evolves fast. We invest heavily in keeping our team at the frontier — from the latest .NET capabilities to edge-first architecture." },
];

export default function AboutPage() {
  const [storyRef, storyInView] = useInView(0.1);
  const [possRef, possInView] = useInView(0.1);
  const [valuesRef, valuesInView] = useInView(0.1);
  const [teamRef, teamInView] = useInView(0.05);

  return (
    <div className="abt-page">

      {/* ── Hero ── */}
      <section className="abt-hero">
        <div className="abt-hero__bg" />
        <div className="abt-hero__content">
          <h1 className="abt-hero__title">About us</h1>
        </div>
      </section>

      {/* ── Revolutionize ── */}
      <section className={`abt-story ${storyInView ? "abt-story--in" : ""}`} ref={storyRef}>
        <div className="abt-story__inner">
          <div className="abt-story__text">
            <h2 className="abt-section-title">Revolutionize your<br /><em>experience</em></h2>
            <p>
              Projukti Vision is a dynamic technology startup focused on delivering custom software
              solutions that empower businesses to streamline their operations, enhance user experiences,
              and achieve digital transformation. Founded with a vision to turn innovative ideas into
              scalable, client-centric applications, BSAAS combines technical expertise with a deep
              understanding of modern business needs.
            </p>
            <p>
              Our team specializes in custom web applications using Microsoft .NET Core, cross-platform
              mobile apps with Flutter for Android and iOS, REST API development, Odoo customization,
              digital wallet enablement (Google Wallet &amp; Apple Wallet), and enterprise-grade
              back-office automation — providing end-to-end services from requirement analysis to
              deployment and hosting.
            </p>
            <Link to="/contact" className="abt-btn-navy">Learn more</Link>
          </div>
          <div className="abt-story__visual">
            <div className="abt-wave-bg" />
            <div className="abt-vr-illustration">
              <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" className="abt-vr-svg">
                <rect x="60" y="60" width="240" height="200" rx="12" fill="#d4b8b8" opacity="0.7"/>
                <rect x="80" y="80" width="200" height="160" rx="8" fill="#c4a0a0" opacity="0.6"/>
                <rect x="100" y="110" width="120" height="8" rx="4" fill="#b08080" opacity="0.5"/>
                <rect x="100" y="128" width="90" height="6" rx="3" fill="#b08080" opacity="0.4"/>
                <rect x="100" y="144" width="100" height="6" rx="3" fill="#b08080" opacity="0.4"/>
                <circle cx="145" cy="185" r="22" fill="#b08080" opacity="0.35"/>
                <circle cx="195" cy="185" r="18" fill="#b08080" opacity="0.3"/>
                <rect x="155" y="258" width="30" height="18" rx="4" fill="#9a8080" opacity="0.5"/>
                <rect x="130" y="274" width="80" height="10" rx="5" fill="#9a8080" opacity="0.4"/>
                <rect x="270" y="100" width="160" height="100" rx="20" fill="#e8e8e8"/>
                <rect x="280" y="110" width="140" height="80" rx="16" fill="#d0d0d0"/>
                <rect x="292" y="122" width="50" height="56" rx="10" fill="#a0a0b0"/>
                <rect x="356" y="122" width="50" height="56" rx="10" fill="#a0a0b0"/>
                <path d="M270 115 Q220 60 300 50 Q380 40 430 115" fill="none" stroke="#555" strokeWidth="18" strokeLinecap="round"/>
                <path d="M270 185 Q220 240 300 250 Q380 260 430 185" fill="none" stroke="#555" strokeWidth="18" strokeLinecap="round"/>
                <circle cx="360" cy="88" r="16" fill="#f0d0c0"/>
                <rect x="348" y="104" width="24" height="36" rx="8" fill="#f0f0f0"/>
                <rect x="344" y="136" width="12" height="30" rx="6" fill="#8b1a1a" transform="rotate(-15 344 136)"/>
                <rect x="360" y="136" width="12" height="30" rx="6" fill="#8b1a1a" transform="rotate(10 360 136)"/>
                <ellipse cx="336" cy="166" rx="9" ry="5" fill="#6b3a3a" transform="rotate(-15 336 166)"/>
                <ellipse cx="374" cy="164" rx="9" ry="5" fill="#7b4a9a" transform="rotate(10 374 164)"/>
                <rect x="330" y="108" width="18" height="10" rx="5" fill="#f0d0c0" transform="rotate(-20 330 108)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Possibilities ── */}
      <section className={`abt-poss ${possInView ? "abt-poss--in" : ""}`} ref={possRef}>
        <div className="abt-wave-top" />
        <div className="abt-poss__inner">
          <div className="abt-poss__visual">
            <div className="abt-blob-nav">
              <div className="abt-blob-circle" />
              <div className="abt-vr-person">
                <svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" className="abt-person-svg">
                  <rect x="10" y="40" width="120" height="160" rx="8" fill="#d4b0b0" opacity="0.6"/>
                  <rect x="20" y="50" width="100" height="140" rx="6" fill="#c4a0a0" opacity="0.5"/>
                  <circle cx="70" cy="120" r="30" fill="#b08080" opacity="0.4"/>
                  <rect x="170" y="30" width="120" height="8" rx="3" fill="#c0a888" opacity="0.5"/>
                  <rect x="170" y="50" width="120" height="8" rx="3" fill="#c0a888" opacity="0.45"/>
                  <rect x="175" y="38" width="8" height="12" rx="2" fill="#a08060" opacity="0.5"/>
                  <rect x="186" y="38" width="6" height="12" rx="2" fill="#907050" opacity="0.5"/>
                  <rect x="195" y="38" width="9" height="12" rx="2" fill="#b09070" opacity="0.5"/>
                  <ellipse cx="160" cy="240" rx="90" ry="50" fill="#8b1a1a" opacity="0.75"/>
                  <ellipse cx="160" cy="220" rx="70" ry="55" fill="#7a1515" opacity="0.8"/>
                  <circle cx="155" cy="145" r="22" fill="#e8c8b0"/>
                  <rect x="135" y="167" width="40" height="50" rx="15" fill="#c8d8b0"/>
                  <rect x="140" y="138" width="34" height="20" rx="8" fill="#444"/>
                  <rect x="143" y="141" width="12" height="12" rx="4" fill="#8b9dc3"/>
                  <rect x="159" y="141" width="12" height="12" rx="4" fill="#8b9dc3"/>
                  <rect x="130" y="215" width="22" height="50" rx="11" fill="#c8d8b0" transform="rotate(20 130 215)"/>
                  <rect x="158" y="215" width="22" height="50" rx="11" fill="#c8d8b0" transform="rotate(-10 158 215)"/>
                  <rect x="128" y="240" width="55" height="35" rx="4" fill="#555"/>
                  <rect x="130" y="242" width="51" height="30" rx="3" fill="#222"/>
                  <ellipse cx="118" cy="262" rx="14" ry="7" fill="#c87070" transform="rotate(20 118 262)"/>
                  <ellipse cx="182" cy="258" rx="14" ry="7" fill="#c87070" transform="rotate(-10 182 258)"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="abt-poss__text">
            <h2 className="abt-section-title">Step into a new world<br /><em>of possibilities</em></h2>
            <p>
              At Projukti Vision, we are committed to providing our clients with the best software
              solutions on the market. Our team of experts works tirelessly to ensure that our software
              is user-friendly, reliable, and efficient — whether it's a FinTech wallet app, a
              distributed document processing system, or a multi-tenant HR platform.
            </p>
            <p>Start with the customer — find out what they want and give it to them.</p>
            <Link to="/services" className="abt-btn-navy">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="abt-values" ref={valuesRef}>
        <div className="abt-values__header">
          <span className="abt-tag abt-tag--dark">What We Believe</span>
          <h2 className="abt-section-title abt-section-title--dark">Our <em>Values</em></h2>
        </div>
        <div className="abt-values__grid">
          {VALUES.map((v, i) => (
            <div
              className={`abt-value-card ${valuesInView ? "abt-value-card--in" : ""}`}
              key={i}
              style={{ "--d": `${i * 0.1}s` }}
            >
              <div className="abt-value-card__icon">{v.icon}</div>
              <h3 className="abt-value-card__title">{v.title}</h3>
              <p className="abt-value-card__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="abt-team" ref={teamRef}>
        <div className="abt-team__grid">
          {TEAM.map((m, i) => (
            <div
              className={`abt-team-card ${teamInView ? "abt-team-card--in" : ""}`}
              key={i}
              style={{ "--d": `${i * 0.1}s` }}
            >
              <img src={m.avatar} alt={m.name} className="abt-team-card__avatar" />
              <div className="abt-team-card__info">
                <h3 className="abt-team-card__name">{m.name}, <span>{m.role}</span></h3>
                <p className="abt-team-card__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}