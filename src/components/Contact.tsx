import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="pb-10">
      <h1 className="p-12 font-mono text-4xl text-center">Contact</h1>
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-3 px-3 py-2 text-2xl underline rounded-sm bg-secondary text-main">
          <FiMail />
          <a href="mailto: tim@silvatim.com">tim@silvatim.com</a>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-2xl underline rounded-sm text-main bg-secondary">
          <FaLinkedinIn />
          <a href="https://www.linkedin.com/in/silva-tim/">silva-tim</a>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-2xl underline rounded-sm text-main bg-secondary">
          <FaGithub />
          <a href="https://github.com/silva-tim">silva-tim</a>
        </div>
      </div>
    </section>
  );
}
