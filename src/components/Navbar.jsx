import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
    { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  // { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news" },
  // { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar__logo">
        <img src="/logo.png" alt="Projukti Vision" style={{ height: "44px", width: "auto" }} />
        <span className="logo-text">PROJUKTI<span>VISION</span></span>
      </Link>

      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l.label}>
            <Link
              to={l.path}
              className={location.pathname === l.path ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li className="navbar__links-signin mobile-only">
          <Link to="/signin" className="btn btn--ghost" onClick={() => setMenuOpen(false)}>Sign In</Link>
        </li>
      </ul>

      <div className="navbar__right">
        {/* <Link to="/signin" className="navbar__signin">Sign In</Link> */}
        <Link to="/contact" className="navbar__cta">Get Started →</Link>
        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
