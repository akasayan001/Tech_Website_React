import { useState } from "react";
import { useInView } from "../hooks/useInView";
import "./NewsPage.css";

const NEWS = [
  {
    id: 1,
    category: "Company News",
    tag: "company-news",
    date: "May 8, 2025",
    title: "Projukti Vision Raises Seed Funding to Expand AI Engineering Division",
    excerpt:
      "We're thrilled to announce a new round of funding to accelerate our AI capabilities and grow our engineering team across India.",
    readTime: "3 min read",
    featured: true,
    author: "Saibal Sarkar",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    tags: ["funding", "company"],
  },
  {
    id: 2,
    category: "Case Study",
    tag: "case-study",
    date: "Apr 22, 2025",
    title: "How We Built NovaPay's Fraud Detection Engine in 90 Days",
    excerpt:
      "A deep-dive into the architecture decisions, trade-offs, and engineering lessons from our most ambitious fintech project to date.",
    readTime: "8 min read",
    author: "Michelle Lee",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    tags: ["fintech", "engineering"],
  },
  {
    id: 3,
    category: "Insights",
    tag: "insights",
    date: "Apr 10, 2025",
    title: "The State of AI Engineering in Indian Startups: 2025 Report",
    excerpt:
      "We surveyed 200+ CTOs and engineering leaders. Here's what they told us about AI adoption, challenges, and what's coming next.",
    readTime: "6 min read",
    author: "Aline Turner",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
    tags: ["AI", "report"],
  },
  {
    id: 4,
    category: "Engineering",
    tag: "engineering",
    date: "Mar 28, 2025",
    title: "Why We Switched Our Entire Infrastructure to Edge-First Architecture",
    excerpt:
      "After 6 months of evaluation, we moved our platform to an edge-first model. Here's what we learned, what broke, and what we'd do differently.",
    readTime: "10 min read",
    author: "Iris Johnson",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    tags: ["infrastructure", "devops"],
  },
  {
    id: 5,
    category: "Company News",
    tag: "company-news",
    date: "Mar 15, 2025",
    title: "Projukti Vision Opens New Office in Bangalore",
    excerpt:
      "To better serve our growing client base in South India, we're expanding our physical presence with a new office in Indiranagar, Bangalore.",
    readTime: "2 min read",
    author: "Saibal Sarkar",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=900&q=80",
    tags: ["office", "expansion"],
  },
  {
    id: 6,
    category: "Insights",
    tag: "insights",
    date: "Feb 27, 2025",
    title: "Zero-Trust Architecture: Not Just a Buzzword Anymore",
    excerpt:
      "As cyber threats evolve, zero-trust has moved from theoretical framework to operational necessity. Here's our practical implementation guide.",
    readTime: "7 min read",
    author: "Michelle Lee",
    authorOrg: "Projukti Vision",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    tags: ["security", "architecture"],
  },
];

const CATS = ["All", "Company News", "Case Study", "Insights", "Engineering"];

const FEATURED = NEWS[0];

const AVATAR_COLORS = {
  "Saibal Sarkar": "#8b1a1a",
  "Michelle Lee": "#1a4a8b",
  "Aline Turner": "#1a6b3a",
  "Iris Johnson": "#6b3a1a",
};

function Avatar({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  const bg = AVATAR_COLORS[name] || "#555";
  return (
    <span className="np-avatar" style={{ background: bg }}>
      {initials}
    </span>
  );
}

export default function NewsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView(0.05);

  const filtered = NEWS.filter((n) => {
    const matchCat = active === "All" || n.category === active;
    const matchSearch =
      !search ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const heroItem =
    active === "All" && !search ? FEATURED : filtered[0] || FEATURED;

  return (
    <div className="np-page">
      {/* ── Hero ── */}
      <section
        className="np-hero"
        style={{ backgroundImage: `url(${heroItem.image})` }}
      >
        <div className="np-hero__overlay" />
        <div className="np-hero__content">
          {active !== "All" ? (
            <>
              <h1 className="np-hero__title">{active}</h1>
              <p className="np-hero__sub">
                {active === "Company News" && "Latest company updates & announcements"}
                {active === "Case Study" && "Real-world results from our projects"}
                {active === "Insights" && "Thought leadership & industry analysis"}
                {active === "Engineering" && "Deep dives from our engineering team"}
              </p>
            </>
          ) : (
            <>
              {/* <span className="np-hero__badge">Latest</span> */}
              <h1 className="np-hero__title">{heroItem.title}</h1>
              <p className="np-hero__sub">{heroItem.excerpt}</p>
            </>
          )}
        </div>
      </section>

      {/* ── Filters + Search ── */}
      <section className="np-section">
        <div className="np-toolbar">
          <div className="np-filters">
            <span className="np-filters__label">Blogs:</span>
            {CATS.map((c) => (
              <button
                key={c}
                className={`np-filter-btn ${active === c ? "np-filter-btn--active" : ""}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="np-search">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="np-search__input"
            />
            <svg className="np-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>

        {/* ── Card Grid ── */}
        <div className="np-grid" ref={ref}>
          {filtered.length === 0 ? (
            <div className="np-empty">No articles found.</div>
          ) : (
            filtered.map((n, i) => (
              <article
                key={n.id}
                className={`np-card ${inView ? "np-card--in" : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="np-card__img-wrap">
                  <img src={n.image} alt={n.title} className="np-card__img" />
                  <div className="np-card__author-bar">
                    <Avatar name={n.author} />
                    <span className="np-card__author-text">
                      {n.authorOrg}, {n.author}
                    </span>
                  </div>
                </div>
                <div className="np-card__body">
                  <h3 className="np-card__title">{n.title}</h3>
                  <p className="np-card__excerpt">{n.excerpt}</p>
                  <div className="np-card__meta">
                    {n.tags.map((t) => (
                      <span key={t} className="np-card__tag">{t}</span>
                    ))}
                  </div>
                  <div className="np-card__footer">
                    <span className="np-card__date">{n.date}</span>
                    <span className="np-card__read">{n.readTime}</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* ── Footer ── */}
     
    </div>
  );
}