import Project from "./Project";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="pb-10 scroll-m-10 sm:scroll-m-18">
      <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((i) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex justify-center w-full"
            key={i.projectNum}
          >
            <Project project={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
