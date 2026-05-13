import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
           <img src="/logo.png" alt="Projukti Vision" style={{ height: "44px", width: "auto" }} />
            <span className="logo-text">PROJUKTI<span>VISION</span></span>
          </div>
          <p>Engineering the digital future,<br />one system at a time.</p>
          <div className="footer__socials">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a key={s} href="#" className="footer__social-link">{s[0]}</a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          {[
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            // { label: "Work", path: "/work" },
            // { label: "Careers", path: "/careers" },
          ].map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Resources</h4>
          {[
            { label: "News", path: "/news" },
            { label: "Blog", path: "/news" },
            { label: "Contact", path: "/contact" },
            { label: "Privacy Policy", path: "#" },
          ].map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p className="footer__contact-info">
            <span>📍</span> 228, Mahendra Bose Lane, Baghbazzar, Kol - 700003, WB, INDIA
          </p>
          <p className="footer__contact-info">
            <span>📞</span> +91 8100336696
          </p>
          <p className="footer__contact-info">
            <span>✉️</span> hello@projuktivision.com
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Projukti Vision. All rights reserved.</span>
        <span>Privacy · Terms · Cookies</span>
      </div>
    </footer>
  );
}
