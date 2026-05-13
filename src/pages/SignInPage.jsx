import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

export default function SignInPage() {
  const [tab, setTab] = useState("signin");
  const [form, setForm] = useState({ email: "", password: "", name: "", confirm: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="signin-page">
      <div className="signin-bg">
        <div className="signin-grid" />
        <div className="signin-glow signin-glow--1" />
        <div className="signin-glow signin-glow--2" />
      </div>

      <Link to="/" className="signin-logo">
          <img src="/logo.png" alt="Projukti Vision" style={{ height: "44px", width: "auto" }} />
        <span className="logo-text">PROJUKTI<span>VISION</span></span>
      </Link>

      <div className="signin-card">
        <div className="signin-tabs">
          <button className={`signin-tab ${tab === "signin" ? "active" : ""}`} onClick={() => setTab("signin")}>Sign In</button>
          <button className={`signin-tab ${tab === "signup" ? "active" : ""}`} onClick={() => setTab("signup")}>Create Account</button>
        </div>

        {tab === "signin" ? (
          <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
            <div className="signin-header">
              <h2>Welcome back</h2>
              <p>Sign in to your Projukti Vision account</p>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handle} />
            </div>
            <div className="signin-opts">
              <label className="signin-remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="signin-forgot">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn--primary btn--full">Sign In →</button>
            <div className="signin-divider"><span>or continue with</span></div>
            <div className="signin-socials">
              <button type="button" className="social-btn">
                <span>G</span> Google
              </button>
              <button type="button" className="social-btn">
                <span>in</span> LinkedIn
              </button>
            </div>
          </form>
        ) : (
          <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
            <div className="signin-header">
              <h2>Create account</h2>
              <p>Join Projukti Vision's client portal</p>
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handle} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handle} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input name="confirm" type="password" placeholder="••••••••" value={form.confirm} onChange={handle} />
            </div>
            <button type="submit" className="btn btn--primary btn--full">Create Account →</button>
          </form>
        )}
      </div>

      <p className="signin-back">
        <Link to="/">← Back to website</Link>
      </p>
    </div>
  );
}
