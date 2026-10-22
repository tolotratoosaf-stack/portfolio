import "./CV.css";

export default function Contact() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button type="button" className="cv-btn" onClick={scrollToContact}>
      Me Contacter
    </button>
  );
}
