"use client";

import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";

const projectTypes = [
  "Residential",
  "Commercial",
  "Cultural",
  "Hospitality",
  "Interior",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("sent");
    setForm(initialForm);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero" aria-label="Contact">
        <div className="contact-hero-grid">
          <div className="contact-intro">
            <div className="contact-kicker">
              <p>Neozen</p>
              <p>Connect with us</p>
            </div>
            <h1 className="contact-title">
              Start
              <br />
              Your
              <br />
              Journey
            </h1>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Company</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="google.com"
                value={form.company}
                onChange={handleChange}
              />
            </label>

            <label className="contact-field">
              <span>Project type</span>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select one...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                rows={2}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <div className="contact-actions">
              <button className="contact-submit" type="submit">
                Submit message
              </button>
              {status === "sent" ? (
                <p className="contact-note" role="status">
                  Thank you. We&apos;ll be in touch soon.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
