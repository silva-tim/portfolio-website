import { links } from "../data";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <header className="relative top-0 flex justify-between">
      <motion.div
        className="fixed top-0 w-full p-3 bg-mainLight sm:top-6 sm:rounded-full sm:left-1/4 sm:w-1/2 lg:left-1/3 lg:w-1/3 bg-opacity-70"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex justify-around">
            {links.map((link) => (
              <motion.li key={link.href}>
                <a href={link.href} className="font-josefin">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
