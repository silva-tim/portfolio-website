import { skills } from "../data";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="pb-20 scroll-m-10 sm:scroll-m-18">
      <h1 className="p-12 font-mono text-4xl text-center">My Skills</h1>
      <div className="flex flex-wrap justify-center w-3/5 gap-4 m-auto">
        {skills.map((i) => (
          <SkillCard skill={i} />
        ))}
      </div>
    </section>
  );
}
