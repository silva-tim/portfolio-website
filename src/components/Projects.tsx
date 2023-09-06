import Project from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="pb-20 scroll-m-10 sm:scroll-m-18 bg-[#1A1D20]"
    >
      <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {projects.map((i) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ bounce: 0 }}
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
