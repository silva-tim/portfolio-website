import { links } from "../data";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import clsx from "clsx";
import { useActiveContext } from "../context/activeContext";

export default function NavBar() {
  const { active, setActive } = useActiveContext();

  return (
    <header className="relative top-0 z-50 flex justify-between">
      <div className="absolute flex justify-between w-full h-20 top-12 sm:top-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex justify-center pt-4 basis-1/3"
        >
          <a href="#home">
            <img src="/tsicon2.png" alt="" className="w-14 h-14" />
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex justify-center gap-4 pt-6 basis-1/3"
        >
          <a href="https://www.linkedin.com/in/silva-tim/" target="_blank">
            <div className="relative w-10 h-10 transition bg-white rounded-full hover:scale-110">
              <FaLinkedinIn className="absolute text-xl top-2.5 left-2.5 text-main" />
            </div>
          </a>
          <a href="https://github.com/silva-tim" target="_blank">
            <div className="relative w-10 h-10 transition bg-white rounded-full hover:scale-110">
              <FaGithub className="absolute text-xl top-2.5 left-2.5 text-main" />
            </div>
          </a>
        </motion.div>
      </div>
      <motion.div
        className="fixed top-0 w-full p-3 bg-mainLight sm:top-6 sm:rounded-full sm:left-1/4 sm:w-1/2 lg:left-1/3 lg:w-1/3 bg-opacity-70"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex justify-around">
            {links.map((link) => (
              <motion.li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={clsx("hover:text-secondary font-josefin", {
                    "text-secondary": active === link.name,
                  })}
                  onClick={() => setActive(link.name)}
                >
                  {link.name}
                  {link.name === active && (
                    <motion.span
                      className="absolute inset-0 -mx-2 rounded-full md:-mx-5 md:-my-2 bg-main -z-10"
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
