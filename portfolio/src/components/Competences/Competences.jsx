import { useEffect, useRef, useState } from "react";
import "./Competences.css";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    subtitle: "Stack principale",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Scss", level: 80 },
    ],
  },
  {
    title: "Interface",
    subtitle: "Expérience utilisateur",
    skills: [
      { name: "UI / UX", level: 78 },
      { name: "Responsive Design", level: 85 },
      { name: "Design Systems", level: 72 },
    ],
  },
  {
    title: "Pratique",
    subtitle: "Qualité & méthode",
    skills: [
      { name: "Architecture front", level: 74 },
      { name: "Performance", level: 70 },
      { name: "Accessibilité", level: 68 },
    ],
  },
];

function useCountUp(target, enabled, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frameId;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, enabled, duration]);

  return value;
}

function SkillRow({ skill, visible, delay }) {
  const level = useCountUp(skill.level, visible, 1200);

  return (
    <li style={{ "--item-delay": `${delay}ms` }}>
      <div className="competences-meta">
        <span className="competences-name">{skill.name}</span>
        <span className="competences-level">
          {String(level).padStart(2, "0")}%
        </span>
      </div>
      <div
        className="competences-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
        aria-label={skill.name}
      >
        <span
          className="competences-fill"
          style={{ "--skill-level": visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </li>
  );
}

export default function Competences() {
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
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`competences${visible ? " is-visible" : ""}`}
      id="competences"
      ref={sectionRef}
    >
      <p className="competences-label">Compétences</p>
      <h2 className="competences-title">Ce que je maîtrise</h2>
      <p className="competences-intro">
        Un focus front-end autour de <strong>React</strong>, avec une attention
        particulière au design d&apos;interface et à la qualité du code.
      </p>

      <div className="competences-grid">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <article
            className="competences-group"
            key={group.title}
            style={{ "--group-index": groupIndex }}
          >
            <header className="competences-group-head">
              <h3>{group.title}</h3>
              <span>{group.subtitle}</span>
            </header>

            <ul className="competences-list">
              {group.skills.map((skill, skillIndex) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  visible={visible}
                  delay={350 + groupIndex * 180 + skillIndex * 140}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
