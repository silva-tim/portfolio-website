import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <div className="text-center">
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
          <button className="px-5 py-2 mt-6 text-sm border-2 rounded-sm sm:text-2xl border-secondary text-secondary ms-2">
            Contact
          </button>
          <button className="px-5 py-2 mt-6 text-sm text-black rounded-sm sm:text-2xl bg-secondary">
            Projects
          </button>
        </div>
      </div>
    </section>
  );
}
