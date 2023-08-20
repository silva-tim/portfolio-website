import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <div className="text-center basis-2/3">
        <h1 className="font-mono text-8xl ps-10">
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
        <h2 className="pt-2 text-4xl tracking-wider">Full Stack Developer</h2>
        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 mt-6 text-2xl border-2 rounded-sm border-secondary text-secondary ms-2">
            Contact
          </button>
          <button className="px-5 py-2 mt-6 text-2xl text-black rounded-sm bg-secondary ms-2">
            Projects
          </button>
        </div>
      </div>
    </section>
  );
}
