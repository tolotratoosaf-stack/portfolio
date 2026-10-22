import { useEffect, useRef, useState } from "react";
import "./Footer.css";

const EMAIL = "ranaivojaonaherytolotrafaneva@gmail.com";

export default function Footer() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`footer${visible ? " is-visible" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <p className="footer-label">Contact</p>
      <h2 className="footer-title">Travaillons ensemble</h2>
      <p className="footer-intro">
        Une idée, un projet ou une opportunité ? Écrivez-moi directement.
      </p>

      <a className="footer-email" href={`mailto:${EMAIL}`}>
        <svg
          className="footer-email-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>{EMAIL}</span>
      </a>

      <p className="footer-copy">© {new Date().getFullYear()} Tolotra Adrian</p>
    </footer>
  );
}
