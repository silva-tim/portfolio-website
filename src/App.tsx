import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <body>
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </body>
  );
}

export default App;
