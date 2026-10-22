import "./App.css";
import About from "./components/About/About";
import Competences from "./components/Competences/Competences";
import Footer from "./components/Footer/Footer";
import Home from "./components/Header/Home";
import NavBar from "./components/Navigation/BarNav";
import Projets from "./components/Projets/Projets";
import ScrollBar from "./components/Navigation/ScrollBar";

function App() {
  return (
    <>
      <ScrollBar />
      <NavBar />
      <Home />
      <About />
      <Competences />
      <Projets />
      <Footer />
    </>
  );
}

export default App;
