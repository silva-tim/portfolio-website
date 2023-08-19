import { links } from "../data";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <header className="relative flex justify-between top-20 sm:top-0">
      <div>Tim Silva</div>
      <div>Other</div>
      <motion.div
        className="fixed top-0 w-full p-3 bg-mainLight sm:rounded-full sm:left-1/3 sm:w-1/3 bg-opacity-70"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav>
          <ul className="flex justify-around">
            {links.map((link) => (
              <motion.li key={link.href}>
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
