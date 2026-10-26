"use client";

import { useCurtain } from "@/components/CurtainPreloader";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Service", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const { navigate } = useCurtain();

  return (
    <footer className="contact-footer">
      <div className="contact-footer-top">
        <nav className="contact-footer-nav" aria-label="Footer">
          {footerLinks.map((item, index) => (
            <button
              key={item.href}
              type="button"
              className="contact-footer-link"
              onClick={() => navigate(item.href)}
            >
              <span>({index + 1})</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="contact-footer-brand">
          <p className="contact-footer-mark" aria-hidden="true">
            (Neozen)
          </p>
          <div className="contact-footer-meta">
            <div>
              <p>
                <span>Email</span>
                hello@neozen.com
              </p>
              <p>
                <span>Phone</span>
                By appointment
              </p>
              <p>
                <span>Social</span>
                Instagram
                <br />
                Facebook
                <br />
                LinkedIn
              </p>
            </div>
            <div>
              <p className="contact-footer-office">
                <span>Office</span>
                Kızılay, Çankaya
                <br />
                Ankara, Turkey
              </p>
              <p>
                <span>Hours</span>
                Monday to Friday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer-bar">
        <span>© {new Date().getFullYear()} Neozen — All rights reserved</span>
        <span>Terms of service</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
}
