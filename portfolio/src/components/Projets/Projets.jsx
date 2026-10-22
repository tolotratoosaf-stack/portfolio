import { useEffect, useRef, useState } from "react";
import "./Projets.css";

const PROJECTS = [
  {
    number: "01",
    title: "Portfolio React",
    role: "Design & Développement",
    description:
      "Site personnel construit avec React : animations soignées, navigation fluide et identité visuelle cohérente autour d’une esthétique sombre et bleue.",
    stack: ["React", "JavaScript", "CSS"],
    live: "#",
    code: "#",
  },
  {
    number: "02",
    title: "Interface Dashboard",
    role: "UI Front-End",
    description:
      "Tableau de bord responsive pensé pour la clarté : composants réutilisables, hiérarchie visuelle nette et micro-interactions utiles.",
    stack: ["React", "Scss", "UI/UX"],
    live: "#",
    code: "#",
  },
  {
    number: "03",
    title: "Landing Product",
    role: "Front-End & Motion",
    description:
      "Page produit orientée conversion, avec un hero immersif, une typographie expressive et des transitions fluides au scroll.",
    stack: ["React", "JavaScript", "Scss"],
    live: "#",
    code: "#",
  },
];

export default function Projets() {
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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`projets${visible ? " is-visible" : ""}`}
      id="projets"
      ref={sectionRef}
    >
      <p className="projets-label">Projets</p>
      <h2 className="projets-title">Mes réalisations</h2>
      <p className="projets-intro">
        Une sélection de projets front-end où je croise <strong>React</strong>,
        design d&apos;interface et attention au détail.
      </p>

      <ul className="projets-list">
        {PROJECTS.map((project, index) => (
          <li
            className="projet-item"
            key={project.number}
            style={{ "--projet-index": index }}
          >
            <div className="projet-index" aria-hidden="true">
              {project.number}
            </div>

            <div className="projet-body">
              <div className="projet-heading">
                <h3>{project.title}</h3>
                <span className="projet-role">{project.role}</span>
              </div>

              <p className="projet-desc">{project.description}</p>

              <ul className="projet-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <code>{tech}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="projet-links">
              <a href={project.live} className="projet-link">
                Voir le projet
              </a>
              <a href={project.code} className="projet-link projet-link-ghost">
                Code
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
