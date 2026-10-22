import "./BarNav.css";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function NavBar() {
  return (
    <nav>
      <h3 onClick={() => scrollToId("acceuil")}>TA</h3>
      <ul>
        <li onClick={() => scrollToId("acceuil")}>Acceuil</li>
        <li onClick={() => scrollToId("apropos")}>A propos</li>
        <li onClick={() => scrollToId("competences")}>Competences</li>
        <li onClick={() => scrollToId("projets")}>Projets</li>
        <li>
          <button type="button" onClick={() => scrollToId("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
