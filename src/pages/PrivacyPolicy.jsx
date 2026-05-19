import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";

const sections = [
  {
    id: "information-we-collect",
    icon: "🗂️",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Account & Profile Data",
        text: "When you register for our platform, we collect your name, email address, password (encrypted), company name, billing information, and profile preferences.",
      },
      {
        subtitle: "Usage & Analytics Data",
        text: "We automatically collect data about how you interact with our services — including features used, pages visited, session duration, clicks, and performance metrics to improve your experience.",
      },
      {
        subtitle: "Device & Technical Data",
        text: "We collect IP address, browser type, operating system, device identifiers, time zone settings, and crash logs to ensure compatibility and security.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: "⚙️",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "To provide, maintain, and improve our SaaS platform, process transactions, send service-related communications, and provide customer support.",
      },
      {
        subtitle: "Product Improvement",
        text: "We analyze aggregated usage patterns to develop new features, fix bugs, and optimize our platform performance across all user segments.",
      },
      {
        subtitle: "Marketing & Communications",
        text: "With your consent, we may send product updates, newsletters, and promotional content. You can opt out at any time through your account settings.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: "🔗",
    title: "Data Sharing & Disclosure",
    content: [
      {
        subtitle: "Third-Party Service Providers",
        text: "We share data with vetted partners (payment processors, cloud infrastructure, analytics providers) solely to operate our services. All partners are bound by strict data processing agreements.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose information when required by law, court order, or government authority, or to protect the safety and rights of our users and the public.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or asset sale, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy.",
      },
    ],
  },
  {
    id: "data-security",
    icon: "🔒",
    title: "Data Security",
    content: [
      {
        subtitle: "Encryption & Protection",
        text: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We maintain SOC 2 Type II compliance and conduct regular third-party security audits.",
      },
      {
        subtitle: "Access Controls",
        text: "We enforce strict role-based access controls internally. Only authorized personnel with a legitimate business need can access user data, and all access is logged.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: "✅",
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: "Access & Portability",
        text: "You can request a copy of all personal data we hold about you at any time. We will provide it in a machine-readable format within 30 days.",
      },
      {
        subtitle: "Correction & Deletion",
        text: "You have the right to correct inaccurate data or request complete deletion of your account and associated data, subject to legal retention requirements.",
      },
      {
        subtitle: "Opt-Out & Restrictions",
        text: "You may opt out of marketing communications, restrict certain processing activities, or object to data use for profiling at any time via account settings.",
      },
    ],
  },
  {
    id: "cookies",
    icon: "🍪",
    title: "Cookies & Tracking",
    content: [
      {
        subtitle: "Essential Cookies",
        text: "Required for the platform to function — including authentication tokens, session management, and security features. These cannot be disabled.",
      },
      {
        subtitle: "Analytics & Performance",
        text: "We use analytics cookies to understand how users interact with our platform. You can disable these via your browser settings or our cookie preference center.",
      },
    ],
  },
  {
    id: "data-retention",
    icon: "🗓️",
    title: "Data Retention",
    content: [
      {
        subtitle: "Retention Periods",
        text: "We retain account data for the duration of your subscription plus 90 days. Usage logs are retained for 12 months. Billing records are kept for 7 years as required by law.",
      },
      {
        subtitle: "Deletion Process",
        text: "Upon account deletion, personal data is purged from active systems within 30 days and from backups within 90 days, unless retention is required by law.",
      },
    ],
  },
  {
    id: "contact",
    icon: "📬",
    title: "Contact & DPO",
    content: [
      {
        subtitle: "Privacy Team",
        text: "For any privacy-related questions, requests, or concerns, contact our dedicated Privacy Team at privacy@projuktivision.com. We respond to all requests within 5 business days.",
      },
      {
        subtitle: "Data Protection Officer",
        text: "Our DPO can be reached at dpo@projuktivision.com or by mail at: Projukti Vision Inc., 123 Tech Avenue, San Francisco, CA 94105, United States.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sectionEls = sections.map((s) => document.getElementById(s.id));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (
          sectionEls[i] &&
          sectionEls[i].getBoundingClientRect().top <= 120
        ) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pp-root">
      {/* Progress Bar */}
      <div className="pp-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Hero */}
      <header className="pp-hero">
        <div className="pp-hero__badge">Legal</div>
        <h1 className="pp-hero__title">Privacy Policy</h1>
        <p className="pp-hero__sub">
          We take your privacy seriously. This policy explains what data we
          collect, how we use it, and the rights you have over it.
        </p>
        <div className="pp-hero__meta">
          <span>📅 Effective: January 1, 2025</span>
          <span>🔄 Last updated: May 10, 2026</span>
          <span>📍 Applies to: Projukti vision</span>
        </div>
      </header>

      <div className="pp-layout">
        {/* Sidebar Nav */}
        <aside className="pp-sidebar">
          <p className="pp-sidebar__label">On this page</p>
          <nav>
            {sections.map((s) => (
              <button
                key={s.id}
                className={`pp-sidebar__link ${activeSection === s.id ? "active" : ""}`}
                onClick={() => scrollTo(s.id)}
              >
                <span className="pp-sidebar__icon">{s.icon}</span>
                {s.title}
              </button>
            ))}
          </nav>

          <div className="pp-sidebar__contact">
            <p>Questions about this policy?</p>
            <a href="mailto:privacy@projuktivision.com">privacy@projuktivision.com</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="pp-main">
          {/* Summary Cards */}
          <div className="pp-summary">
            <div className="pp-summary__card pp-summary__card--blue">
              <div className="pp-summary__card-icon">🔒</div>
              <div>
                <strong>We never sell your data</strong>
                <p>Your data is never sold or rented to third parties for marketing.</p>
              </div>
            </div>
            <div className="pp-summary__card pp-summary__card--green">
              <div className="pp-summary__card-icon">✅</div>
              <div>
                <strong>You're in control</strong>
                <p>Access, export, or delete your data at any time from your account.</p>
              </div>
            </div>
            <div className="pp-summary__card pp-summary__card--purple">
              <div className="pp-summary__card-icon">🛡️</div>
              <div>
                <strong>SOC 2 Compliant</strong>
                <p>We meet the highest enterprise security and privacy standards.</p>
              </div>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="pp-section">
              <div className="pp-section__header">
                <span className="pp-section__icon">{section.icon}</span>
                <h2 className="pp-section__title">{section.title}</h2>
              </div>
              <div className="pp-section__body">
                {section.content.map((block, i) => (
                  <div key={i} className="pp-block">
                    <h3 className="pp-block__subtitle">{block.subtitle}</h3>
                    <p className="pp-block__text">{block.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer Note */}
          <div className="pp-footer-note">
            <p>
              By using Projukti vision, you agree to this Privacy Policy. We may update
              this policy periodically and will notify you of significant changes
              via email or in-app notification.
            </p>
            <div className="pp-footer-note__actions">
              <a href="/contact" className="pp-btn pp-btn--outline">Contact Us</a>
                   
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}  