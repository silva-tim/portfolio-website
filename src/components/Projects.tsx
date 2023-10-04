import Project from "./ProjectCard";
import { projects } from "../data";
import { useInView } from "react-intersection-observer";
import { useActiveContext } from "../context/activeContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const { setActive } = useActiveContext();

  useEffect(() => {
    if (inView) {
      setActive("Projects");
    }
  }, [inView, setActive]);

  return (
    <section
      ref={ref}
      id="projects"
      className="pb-20 scroll-m-10 sm:scroll-m-18 bg-main"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="p-12 font-mono text-4xl text-center">Projects</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((i) => (
            <>
              <Project project={i} />
            </>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
