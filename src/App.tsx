import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <body className="h-[400rem]">
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <About />
    </body>
  );
}

export default App;
