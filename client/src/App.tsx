import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <body className="h-[400rem]">
      <NavBar />
      <Home />
      <About />
    </body>
  );
}

export default App;
