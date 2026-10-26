"use client";

import { useState } from "react";
import SectionMark from "@/components/SectionMark";
import PrimaryButton from "@/components/PrimaryButton";
import Reveal, { ParaReveal } from "@/components/Reveal";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ConnectSection() {
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
    <section className="home-connect" id="contact">
      <div className="connect-container">
        <div className="connect-layout">
          <div className="connect-col connect-col-copy">
            <Reveal className="connect-mark-wrap" y={24}>
              <SectionMark className="is-light">Connect</SectionMark>
            </Reveal>

            <Reveal className="connect-copy-wrap" delay={80} y={28}>
              <ParaReveal className="connect-copy">
                Neozen blends innovation and sustainability to craft spaces that
                stand out and stand for something. Let&apos;s bring your vision
                to life with thoughtful, modern design.
              </ParaReveal>
            </Reveal>
          </div>

          <Reveal className="connect-col connect-col-form" delay={140} y={32}>
            <form className="connect-form" onSubmit={handleSubmit} noValidate>
              <label className="connect-field">
                <span className="connect-label">Name</span>
                <input
                  className="connect-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="connect-field">
                <span className="connect-label">Email</span>
                <input
                  className="connect-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="connect-field">
                <span className="connect-label">Phone</span>
                <input
                  className="connect-input"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>

              <label className="connect-field">
                <span className="connect-label">Message</span>
                <textarea
                  className="connect-input connect-textarea"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="connect-form-actions">
                <PrimaryButton className="is-on-dark" type="submit">
                  Get in touch
                </PrimaryButton>

                {status === "sent" ? (
                  <p className="connect-form-note" role="status">
                    Thank you — we&apos;ll be in touch soon.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
