import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

/* ── Intersection Observer hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Hero ── */
function Hero() {
  const [tick, setTick] = useState(0);
  const canvasRef = useRef(null);
  const floatersRef = useRef(null);

  /* Scramble animation */
  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 75);
    return () => clearInterval(t);
  }, []);
  const WORD = "TOMORROW";
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";
  const progress = Math.min(tick, WORD.length);
  const scrambled = WORD.split("").map((c, i) =>
    i < progress ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join("");

  /* ── Matrix canvas animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソabcdefghijklmnopqrstuvwxyz{}[]()<>=+-*/;:.,?!#$%^&|~`\"";
    let drops = [];

    function initDrops() {
      const cols = Math.floor(canvas.width / 18);
      drops = Array(cols).fill(1);
    }
    initDrops();
    window.addEventListener("resize", initDrops);

    function drawMatrix() {
      ctx.fillStyle = "rgba(18,22,58,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "14px 'Courier New'";
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const bright = Math.random() > 0.9;
        ctx.fillStyle = bright
          ? "rgba(255,255,255,0.85)"
          : `rgba(180,26,26,${0.3 + Math.random() * 0.5})`;
        ctx.fillText(ch, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }

    const matrixInterval = setInterval(drawMatrix, 55);
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initDrops);
    };
  }, []);

  /* ── Floating code snippets ── */
  useEffect(() => {
    const container = floatersRef.current;
    if (!container) return;

    const snippets = [
      'const app = createApp();',
      'npm run deploy',
      'useEffect(() => {})',
      'Next.js App Router',
      'React Server Components',
      'const token = jwt.sign()',
      'await db.query(sql)',
      'Node.js + Express',
      'public async Task<IActionResult>',
      'ASP.NET Core 8',
      'REST API · GraphQL',
      'MongoDB Atlas',
      'Redis Cache Enabled',
      'docker compose up',
      'kubectl apply -f',
      'CI/CD Pipeline',
      'GitHub Actions',
      'Nginx Reverse Proxy',
      'Linux Ubuntu Server',
      'OpenAI API Integration',
      'AI Powered Search',
      'Machine Learning Model',
      'TensorFlow.predict()',
      'Neural Network Active',
      'bcrypt.hash(password)',
      'JWT Authentication',
      'Firewall Protected',
      'AES-256 Encryption',
      'SELECT * FROM users',
      'JOIN orders ON users.id',
      'PostgreSQL Connected',
      'Firebase Initialized',
      'flutter build apk',
      'React Native CLI',
      'Android Studio Ready',
      'AWS EC2 Running',
      'Azure Cloud Deploy',
      'Google Cloud Functions',
      'git commit -m "deploy"',
      'git push origin main',
      '</> Engineering Future',
      'System Online...',
      'Compiling Innovation...',
      'Initializing Platform...',
      'Loading Secure Modules...',
      'Launching Experience...',
    ];

    function spawnFloater() {
      const el = document.createElement("div");
      el.className = "hero__floater";
      el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
      const x = Math.random() * 80 + 5;
      const bottom = Math.random() * 60;
      const dur = 6 + Math.random() * 8;
      const size = 10 + Math.random() * 4;
      const opacity = 0.15 + Math.random() * 0.2;
      const isRed = Math.random() > 0.5;
      el.style.cssText = `
        left: ${x}%;
        bottom: ${bottom}px;
        font-size: ${size}px;
        color: ${isRed ? `rgba(200,100,100,${opacity})` : `rgba(180,180,255,${opacity})`};
        animation-duration: ${dur}s;
        animation-delay: ${Math.random() * 2}s;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), (dur + 3) * 1000);
    }

    for (let i = 0; i < 14; i++) {
      setTimeout(() => spawnFloater(), i * 500);
    }
    const spawnInterval = setInterval(spawnFloater, 1800);
    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__matrix" />
      <div ref={floatersRef} className="hero__floaters" />

      <div className="hero__bg">
        <div className="hero__dots" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__slash" />
        <div className="hero__slash hero__slash--2" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__tag">
            <span className="tag-dot" /> Next-Gen Software · Kolkata, India
          </span>
          <h1 className="hero__title">
            <span className="hero__line">Building</span>
            <span className="hero__line hero__line--outline">Digital</span>
            <span className="hero__line hero__line--accent">{scrambled}</span>
          </h1>
          <p className="hero__sub">
            Projukti Vision is a dynamic technology startup delivering custom software solutions
            — from .NET Core web apps and Flutter mobile apps to digital wallet enablement,
            back-office automation, and enterprise analytics.
          </p>
          <div className="hero__ctas">
            <Link to="/services" className="btn-ghost">Our Services ↗</Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
          <div className="hero__ring-dot" />
          <div className="hero__center-glow" />
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL DOWN</span>
        <div className="hero__scroll-line"><div className="hero__scroll-fill" /></div>
      </div>
    </section>
  );
}

/* ── Stats Bar ── */
const STATS = [
  { value: "340+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "12", label: "Years in Industry" },
  { value: "60+", label: "Engineers Worldwide" },
];
function Stats() {
  const [ref, inView] = useInView();
  return (
    <div className={`stats ${inView ? "stats--visible" : ""}`} ref={ref}>
      {STATS.map((s, i) => (
        <div className="stats__item" key={i} style={{ "--d": `${i * 0.1}s` }}>
          <strong className="stats__val">{s.value}</strong>
          <span className="stats__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── About / Revolutionize ── */
function About() {
  const [ref, inView] = useInView();
  return (
    <section className={`about ${inView ? "about--visible" : ""}`} ref={ref}>
      <div className="about__text">
        <span className="section-tag" style={{ color: "#252b6e" }}>Who We Are</span>
        <h2 className="section-title" style={{ color: "#252b6e" }}>Revolutionize<br /><em style={{ color: "#252b6e" }}>Your Experience</em></h2>
        <p>
          Projukti Vision is a dynamic technology startup focused on delivering custom software
          solutions that empower businesses to streamline their operations, enhance user experiences,
          and achieve digital transformation. Founded with a vision to turn innovative ideas into
          scalable, client-centric applications, BSAAS combines technical expertise with a deep
          understanding of modern business needs.
        </p>
        <p>
          We specialize in custom web applications using Microsoft .NET Core, cross-platform mobile
          apps with Flutter, REST API development, Odoo customization, digital wallet enablement,
          and enterprise-grade back-office automation — from requirement analysis to deployment
          and hosting.
        </p>
        <Link to="/about" className="btn-primary">Learn More</Link>
      </div>
      <div className="about__visual">
        <div className="blob-wrap">
          <div className="blob-img blob-img--about">
            <div className="blob-img__inner">
              <svg viewBox="0 0 200 200" className="blob-svg" preserveAspectRatio="none">
                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-1C87,14.3,81.5,28.5,73.2,41C64.9,53.4,53.8,64.1,40.8,71.4C27.7,78.7,12.8,82.6,-1.5,85C-15.8,87.3,-31.6,88.2,-45.7,82.8C-59.8,77.4,-72.1,65.7,-79.8,51.5C-87.5,37.3,-90.6,20.6,-89.7,4.5C-88.8,-11.7,-84,-27.2,-75.4,-40C-66.8,-52.8,-54.4,-62.8,-41,-70.6C-27.5,-78.4,-13.8,-84,-0.2,-83.6C13.3,-83.3,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" fill="none" stroke="var(--crimson)" strokeWidth="1.5" opacity="0.3" />
              </svg>
              <div className="blob-photo blob-photo--about" />
            </div>
          </div>
          <div className="blob-decoration blob-decoration--dots" />
        </div>
      </div>
    </section>
  );
}

/* ── "Experience a New World" ── */
function Experience() {
  const [ref, inView] = useInView();
  return (
    <section className={`experience ${inView ? "experience--visible" : ""}`} ref={ref}>
      <div className="experience__bg" />
      <div className="experience__inner">
        <span className="section-tag section-tag--light">What We Offer</span>
        <h2 className="experience__title">Experience a New World</h2>
        <p className="experience__sub">
          Unlock the full potential of your business with our tailored digital solutions —
          from secure FinTech wallets and mobile apps to large-scale back-office automation
          and enterprise analytics that drive real results.
        </p>
        <div className="experience__img-wrap">
          <div className="exp-blob-photo" />
        </div>
      </div>
    </section>
  );
}

/* ── Possibilities ── */
function Possibilities() {
  const [ref, inView] = useInView();
  return (
    <section className={`feature-row ${inView ? "feature-row--visible" : ""}`} ref={ref}>
      <div className="feature-row__inner">
        <div className="feature-row__visual">
          <div className="blob-wrap">
            <div className="blob-img">
              <div className="blob-photo blob-photo--vr" />
            </div>
            <div className="blob-decoration blob-decoration--circle" />
          </div>
        </div>
        <div className="feature-row__text">
          <h2 className="feature-title">Step into a New World<br /><em>of Possibilities</em></h2>
          <p>
            At Projukti Vision, we are committed to providing our clients with the best
            software solutions on the market. Our team of experts works tirelessly to ensure
            that our software is user-friendly, reliable, and efficient — from FinTech wallets
            with Google &amp; Apple Wallet provisioning to distributed back-office systems
            processing millions of documents.
          </p>
          <p>Start with the customer — find out what they want and give it to them.</p>
          <Link to="/services" className="btn-primary">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

/* ── Feature Cards ── */
const FEATURES = [
  {
    title: "Digital Wallet Enablement",
    desc: "We enable secure, in-app card provisioning for Google Wallet and Apple Wallet, leveraging network-grade tokenization and device binding so sensitive card data is never exposed — delivering enhanced fraud protection and frictionless customer onboarding.",
  },
  {
    title: "Back-Office Automation",
    desc: "Our distributed, long-running processing systems manage hundreds of interconnected databases and millions of structured and unstructured documents, ensuring high availability, fault tolerance, and scalable analytics for enterprise clients year-round.",
  },
];
function FeatureCards() {
  const [ref, inView] = useInView();
  return (
    <section className={`feat-cards ${inView ? "feat-cards--visible" : ""}`} ref={ref}>
      {FEATURES.map((f, i) => (
        <div className="feat-card" key={i} style={{ "--d": `${i * 0.15}s` }}>
          <div className="feat-card__bg" />
          <h3 className="feat-card__title">{f.title}</h3>
          <p className="feat-card__desc">{f.desc}</p>
          <Link to="/services" className="btn-ghost btn-ghost--sm">Learn More</Link>
        </div>
      ))}
    </section>
  );
}

/* ── Mobile App Development ── */
function Comfort() {
  const [ref, inView] = useInView();
  return (
    <section className={`feature-row feature-row--alt ${inView ? "feature-row--visible" : ""}`} ref={ref}>
      <div className="feature-row__inner">
        <div className="feature-row__visual">
          <div className="blob-wrap">
            <div className="blob-img blob-img--comfort">
              <div className="blob-photo blob-photo--comfort" />
            </div>
            <div className="blob-decoration blob-decoration--dots blob-decoration--tr" />
          </div>
        </div>
        <div className="feature-row__text">
          <h2 className="feature-title">Mobile App<br /><em>Development</em></h2>
          <p>
            Projukti Vision builds secure, high-performance mobile applications for FinTech
            wallets and restaurant service platforms. For FinTech wallets, we develop apps with
            seamless digital wallet integration, secure payments, tokenization, and real-time
            transaction management. For restaurant services, our apps power online ordering,
            digital payments, loyalty programs, and real-time customer engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Enterprise Reporting ── */
function CustomDesigns() {
  const [ref, inView] = useInView();
  return (
    <section className={`feature-row ${inView ? "feature-row--visible" : ""}`} ref={ref}>
      <div className="feature-row__inner feature-row__inner--rev">
        <div className="feature-row__text">
          <h2 className="feature-title">Enterprise Reporting<br /><em>&amp; Analytics</em></h2>
          <p>
            Our robust reporting platforms transform raw data into actionable insights, supporting
            multi-format outputs including RDLC reports, PDF generation with iText 7, Excel &amp; CSV
            exports, HTML dashboards, and real-time React frontend analytics. We deliver dynamic
            report generation from millions of records, automated scheduling, and role-based
            multi-tenant reporting for compliance and decision-making.
          </p>
        </div>
        <div className="feature-row__visual">
          <div className="blob-wrap">
            <div className="blob-img blob-img--custom">
              <div className="blob-photo blob-photo--code" />
            </div>
            <div className="blob-decoration blob-decoration--hex" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HR Solutions ── */
function Intuitive() {
  const [ref, inView] = useInView();
  return (
    <section className={`feature-row feature-row--alt ${inView ? "feature-row--visible" : ""}`} ref={ref}>
      <div className="feature-row__inner">
        <div className="feature-row__visual">
          <div className="blob-wrap">
            <div className="blob-img blob-img--intuitive">
              <div className="blob-photo blob-photo--dev" />
            </div>
            <div className="blob-decoration blob-decoration--dots" />
            <div className="blob-decoration blob-decoration--hex blob-decoration--hex-sm" />
          </div>
        </div>
        <div className="feature-row__text">
          <h2 className="feature-title">HR Solutions for<br /><em>Garment Industries</em></h2>
          <p>
            Through our collaboration with BHS Infotech, Projukti Vision delivers specialized
            HR solutions for export-oriented garment and apparel manufacturers. Our platforms handle
            large labor volumes, shift-based operations, compliance tracking, payroll integration,
            and audit readiness for international buyers — scalable across multiple factory locations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ── */
function CTABanner() {
  const [ref, inView] = useInView();
  return (
    <section className={`cta ${inView ? "cta--visible" : ""}`} ref={ref}>
      <div className="cta__bg" />
      <div className="cta__inner">
        <span className="section-tag section-tag--light">Ready to Build?</span>
        <h2 className="cta__title">Let's Create Something<br /><span>Remarkable Together</span></h2>
        <p className="cta__sub">Tell us about your project. We'll respond within 24 hours.</p>
        <div className="cta__btns">
          <Link to="/contact" className="btn-primary">Start a Project →</Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Possibilities />
      <FeatureCards />
      <Comfort />
      <CustomDesigns />
      <Intuitive />
      <CTABanner />
    </div>
  );
}