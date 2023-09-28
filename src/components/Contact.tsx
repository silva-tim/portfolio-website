import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="pb-10">
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
    </section>
  );
}
