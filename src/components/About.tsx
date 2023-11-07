import { useInView } from "react-intersection-observer";
import { useActiveContext } from "../context/activeContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActive } = useActiveContext();

  useEffect(() => {
    if (inView) {
      setActive("About");
    }
  }, [inView, setActive]);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-[#1A1D20] scroll-m-10 sm:scroll-m-24 min-h-screen sm:min-h-[66vh]"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="p-12 font-mono text-4xl text-center">About</h1>
        <div className="flex flex-wrap w-11/12 m-auto">
          <div className="flex flex-wrap justify-center h-60 basis-full lg:basis-1/3">
            <div className="text-center">
              <img
                src="/images/me.png"
                alt=""
                className="m-auto rounded-full bg-slate-500 h-1/2"
              />
              <h2 className="mt-6 text-3xl lg:mt-10">Tim Silva</h2>
            </div>
          </div>
          <div className="p-4 text-center lg:text-left lg:text-xl basis-full lg:basis-2/3">
            <p>
              I have always had a strong passion for computers/technology and
              after spending a few years working at a financial advisory firm I
              realized that I wanted a career that pursued these passions more.
              I decided to change paths and began to explore the world of
              programming.
            </p>
            <br />
            <p>
              I enrolled in an accelerated program where I created several
              projects to learn the technologies that are used in the industry
              today. I am a lifelong learner who is always interested in
              pursuing new technologies and tools. I'm currently learning{" "}
              <a
                href="https://sst.dev/"
                target="_blank"
                className="underline text-secondary"
              >
                Serverless Stack
              </a>{" "}
              and{" "}
              <a
                href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
                target="_blank"
                className="underline text-secondary"
              >
                Dynamo DB
              </a>{" "}
              but I am always seeking to learn more. Feel free to{" "}
              <a
                href="mailto: tim@silvatim.com"
                className="underline text-secondary"
              >
                email
              </a>{" "}
              me or connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/silva-tim/"
                target="_blank"
                className="underline text-secondary"
              >
                LinkedIn
              </a>
              !
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
