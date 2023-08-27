import Project from "./Project";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-red-400 scroll-m-10 sm:scroll-m-24">
      <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
      <div className="flex justify-center">
        <Project project={projects.nomadVentures} />
      </div>
    </section>
  );
}
