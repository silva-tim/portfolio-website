import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { useActiveContext } from "../context/activeContext";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActive } = useActiveContext();

  useEffect(() => {
    if (inView) {
      setActive("Contact");
    }
  }, [inView, setActive]);

  return (
    <section ref={ref} id="contact" className="pb-10">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="p-12 font-mono text-4xl text-center">Contact</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 px-3 py-2 text-2xl rounded-sm hover:underline bg-mainLight">
            <FiMail />
            <a href="mailto: tim@silvatim.com" className="text-secondary">
              tim@silvatim.com
            </a>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-2xl rounded-sm hover:underline bg-mainLight">
            <FaLinkedinIn />
            <a
              href="https://www.linkedin.com/in/silva-tim/"
              target="_blank"
              className="text-secondary"
            >
              silva-tim
            </a>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-2xl rounded-sm hover:underline bg-mainLight">
            <FaGithub />
            <a
              href="https://github.com/silva-tim"
              target="_blank"
              className="text-secondary"
            >
              silva-tim
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
