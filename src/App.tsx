import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index />
        <Route path="about" />
        <Route path="projects" />
        <Route path="contact" />
      </Route>
    </Routes>
  );
}

export default App;
