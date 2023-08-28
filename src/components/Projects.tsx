import Project from "./Project";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-m-10 sm:scroll-m-18">
      <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((i) => (
          <div className="flex justify-center w-full" key={i.projectNum}>
            <Project project={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
