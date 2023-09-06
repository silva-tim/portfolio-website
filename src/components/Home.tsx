import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <motion.div
        className="text-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="font-mono text-3xl ps-4 md:text-6xl md:ps-8">
          {" "}
          <Typewriter
            words={[
              "tim-silva",
              "timSilva",
              "tim.silva",
              "<TimSilva />",
              "(tim) => Silva",
            ]}
            loop={0}
            cursor
            typeSpeed={120}
            deleteSpeed={120}
            delaySpeed={4000}
          />
        </h1>
        <h2 className="pt-2 text-xl tracking-wider sm:text-4xl">
          Full Stack Developer
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 mt-6 text-sm transition border-2 rounded-sm outline-none sm:text-2xl border-secondary text-secondary ms-2 hover:scale-110 active:scale-105 focus:scale-110"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="px-5 py-2 mt-6 text-sm text-black transition rounded-sm outline-none sm:text-2xl bg-secondary hover:scale-110 active:scale-105 focus:scale-110"
          >
            Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
