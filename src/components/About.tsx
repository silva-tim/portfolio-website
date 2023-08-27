export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1A1D20] scroll-m-10 sm:scroll-m-24 min-h-screen sm:min-h-[66vh]"
    >
      <h1 className="p-12 font-mono text-4xl text-center">About</h1>
      <div className="flex flex-wrap w-11/12 m-auto">
        <div className="flex flex-wrap justify-center h-60 basis-full lg:basis-1/3">
          <div className="text-center">
            <img
              src="/me.png"
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
            realized that I wanted a career that pursued these passions more. I
            decided to change paths and began to explore the world of
            programming.
          </p>
          <br />
          <p>
            I enrolled in an accelerated program where I created several
            projects to learn the technologies that are used in the industry
            today. My current interests revolve around front-end web
            development, mostly{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="underline text-secondary"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="underline text-secondary"
            >
              Tailwind
            </a>{" "}
            but I am always seeking to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}
