import { skills } from "../data";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="pb-20 scroll-m-10 sm:scroll-m-18">
      <h1 className="p-12 font-mono text-4xl text-center">My Skills</h1>
      <div className="flex flex-wrap justify-center w-3/5 gap-4 m-auto">
        {skills.map((i) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="xl:basis-1/6 basis-full sm:basis-1/3 hover:scale-105"
            key={i.name}
          >
            <SkillCard skill={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
