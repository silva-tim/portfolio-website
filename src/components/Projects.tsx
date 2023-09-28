import Project from "./ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="pb-20 scroll-m-10 sm:scroll-m-18 bg-main">
      <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((i) => (
          <>
            <Project project={i} />
          </>
        ))}
      </div>
    </section>
  );
}
