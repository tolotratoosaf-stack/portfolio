import { useEffect, useState } from "react";
import Contact from "../button/Contact";
import CV from "../button/CV";
import "./Home.css";

const FULL_NAME = "Tolotra Adrian";
const TYPING_DELAY_MS = 1850;
const TYPING_SPEED_MS = 90;

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setTypedName(FULL_NAME);
      return;
    }

    let charIndex = 0;
    let intervalId;

    const startId = setTimeout(() => {
      setIsTyping(true);
      intervalId = setInterval(() => {
        charIndex += 1;
        setTypedName(FULL_NAME.slice(0, charIndex));

        if (charIndex >= FULL_NAME.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, TYPING_SPEED_MS);
    }, TYPING_DELAY_MS);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header id="acceuil">
      <section>
        <h1>
          <span className="welcome">
            <span className="top">WELCOME</span>
            <span className="bottom">WELCOME</span>
          </span>
          <span className={`tolotra${isTyping ? " is-typing" : ""}`}>
            {typedName}
          </span>
        </h1>
      </section>
      <p className="texteHeader">
        Je suis un <strong>developpeur front-end</strong> spécialisé dans
        l'écosystème <code>React</code>. . Je conçois des interfaces modernes,
        performantes et accessibles.
      </p>
      <section className="button">
        <Contact />
        <CV />
      </section>
      <p className="scroll-hint" aria-hidden="true">
        scroll
      </p>
    </header>
  );
}
