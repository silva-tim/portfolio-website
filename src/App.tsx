import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ActiveContextProvider from "./context/activeContext";

function App() {
  return (
    <body>
      <ActiveContextProvider>
        <NavBar />
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </ActiveContextProvider>
    </body>
  );
}

export default App;
