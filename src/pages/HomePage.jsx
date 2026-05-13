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
      "const api = new API();",
      "await db.query(sql);",
      "flutter build apk",
      ".NET Core 8.0",
      "SELECT * FROM users",
      "git commit -m 'feat'",
      "docker compose up",
      "npm run build",
      "public async Task<IActionResult>",
      "var result = await client",
      "REST API · gRPC",
      "IEnumerable<T> data",
      "setState(() { });",
      "SqlConnection conn",
      "services.AddDbContext<>()",
      "FlutterApp.run()",
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

    // Spawn initial batch
    for (let i = 0; i < 14; i++) {
      setTimeout(() => spawnFloater(), i * 500);
    }
    const spawnInterval = setInterval(spawnFloater, 1800);
    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Animated coding background */}
      <canvas ref={canvasRef} className="hero__matrix" />
      <div ref={floatersRef} className="hero__floaters" />

      {/* Background layers */}
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
            We are a dynamic startup dedicated to transforming the way businesses operate
            through innovative, customized software solutions — from web and mobile to VR.
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
          We are a dynamic startup dedicated to transforming the way businesses operate
          through innovative and customized solutions. Our small but highly skilled team
          excels in creating bespoke web applications using Microsoft .NET Core, mobile
          applications with Flutter for Android and iOS, and powerful REST APIs.
        </p>
        <p>
          We specialize in complex business data processing using MS SQL Server and
          managing long-running processes, ensuring your operations run smoothly and
          efficiently. From requirement analysis to deployment and hosting, we provide
          end-to-end services tailored to your unique needs.
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
          Unlock the full potential of your business with tailored solutions that
          optimize processes and drive profitability.
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
            At our company, we are committed to providing our clients with the best
            software solutions on the market. Our team of experts works tirelessly to
            ensure that our software is user-friendly, reliable, and efficient.
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
  { title: "Multiplayer", desc: "Dominate leaderboards, challenge yourself with workouts, collaborate with friends, and explore new worlds with our constantly growing library of VR games and experiences." },
  { title: "Freedom", desc: "As a software company, we offer a wide range of virtual reality experiences and games that cater to everyone's interests and preferences." },
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

/* ── Comfort & Convenience ── */
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
          <h2 className="feature-title">Comfort &amp;<br /><em>Convenience</em></h2>
          <p>
            We guarantee the use of original or equivalent quality parts, ensuring the
            best quality available on the market at the most competitive prices. All our
            interventions come with a one-year warranty.
          </p>
          {/* <Link to="/services" className="link-more">Learn More →</Link> */}
        </div>
      </div>
    </section>
  );
}

/* ── Customizable Designs ── */
function CustomDesigns() {
  const [ref, inView] = useInView();
  return (
    <section className={`feature-row ${inView ? "feature-row--visible" : ""}`} ref={ref}>
      <div className="feature-row__inner feature-row__inner--rev">
        <div className="feature-row__text">
          <h2 className="feature-title">Customizable<br /><em>Designs</em></h2>
          <p>
            We guarantee the use of original or equivalent quality parts, ensuring the
            best quality available on the market at the most competitive prices. All our
            interventions come with a one-year warranty.
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

/* ── Intuitive Controls ── */
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
          <h2 className="feature-title">Intuitive<br /><em>Controls</em></h2>
          <p>
            Use our platform to create various components featuring left or right-aligned
            images alongside text content. Duplicate elements to create a list that suits
            your requirements.
          </p>
          {/* <Link to="/services" className="link-more">Read on →</Link> */}
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