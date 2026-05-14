import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

// ─────────────────────────────────────────────
// 🔑 FILL IN YOUR EMAILJS CREDENTIALS BELOW
// Sign up at https://www.emailjs.com (free)
// Dashboard → Email Services → Add Service   → copy Service ID
//           → Email Templates → Create Template → copy Template ID
//           → Account → API Keys              → copy Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_snfpy0b";
const EMAILJS_TEMPLATE_ID = "template_zlcpwqq";
const EMAILJS_PUBLIC_KEY  = "LJgKmqYhX0oiOREPv";

// ── EmailJS template variables (must match your template exactly) ──
// Main template  : {{name}}, {{email}}, {{phone}}, {{company}}, {{title}}, {{message}}, {{time}}
// Auto-Reply tab : To Email → {{email}}  |  use same variables in body

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

   const templateParams = {
  name: form.name,
  email: form.email,
  phone: form.phone || "N/A",
  company: form.company || "N/A",
  subject: form.subject,
  message: form.message,
  time: new Date().toLocaleString("en-IN", {
    dateStyle: "medium", 
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }),
};

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", JSON.stringify(err));
      const errDetail = err?.text || err?.message || JSON.stringify(err);
      setErrorMsg(`Error: ${errDetail}. Please try again or email us directly.`);
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <div className="cp-page">

      {/* ── Hero ── */}
      <section className="cp-hero">
        <div className="cp-hero__overlay" />
        <div className="cp-hero__content">
          <h1 className="cp-hero__title">Contact us</h1>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="cp-section">
        <div className="cp-grid">

          {/* ── Info Panel ── */}
          <div className="cp-info">
            <div className="cp-logo">
              <img src="/logo.png" alt="Projukti Vision" style={{ height: "44px", width: "auto" }} />
            </div>
            <p className="cp-info__tagline">PROJUKTI VISION</p>

            <div className="cp-divider" />

            <h3 className="cp-info__title">Contact Information</h3>
            <div className="cp-info__items">
              <div className="cp-item">
                <div className="cp-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="cp-item__label">Address</div>
                  <div className="cp-item__value">228, Mahendra Bose Lane, Baghbazzar, Kol - 700003, WB, INDIA</div>
                </div>
              </div>
              <div className="cp-item">
                <div className="cp-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/></svg>
                </div>
                <div>
                  <div className="cp-item__label">Phone</div>
                  <div className="cp-item__value">+91 81003 36696</div>
                </div>
              </div>
              <div className="cp-item">
                <div className="cp-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="cp-item__label">Email</div>
                  <div className="cp-item__value">hello@projuktivision.com</div>
                </div>
              </div>
              <div className="cp-item">
                <div className="cp-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                </div>
                <div>
                  <div className="cp-item__label">Response Time</div>
                  <div className="cp-item__value">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="cp-form-wrap">
            {status === "sent" ? (
              <div className="cp-success">
                <div className="cp-success__icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <button className="cp-btn cp-btn--outline" onClick={reset}>Send Another →</button>
              </div>
            ) : (
              <form className="cp-form" onSubmit={submit}>
                <h3 className="cp-form__title">Send us a message</h3>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label>Name <span>*</span></label>
                    <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handle} required />
                  </div>
                  <div className="cp-form-group">
                    <label>Email <span>*</span></label>
                    <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} required />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handle} />
                  </div>
                  <div className="cp-form-group">
                    <label>Company</label>
                    <input name="company" type="text" placeholder="Your company" value={form.company} onChange={handle} />
                  </div>
                </div>

                <div className="cp-form-group">
                  <label>Subject <span>*</span></label>
                  <select name="subject" value={form.subject} onChange={handle} required>
                    <option value="">Select a subject</option>
                    <option>New Project Inquiry</option>
                    <option>Partnership</option>
                    <option>Career Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="cp-form-group">
                  <label>Message <span>*</span></label>
                  <textarea name="message" rows={5} placeholder="Describe your project or challenge..." value={form.message} onChange={handle} required />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="cp-error">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="cp-btn cp-btn--primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
} 