export default function About() {
  return (
    <section
      id="about"
      className="bg-[#1A1D20] min-h-screen sm:min-h-0 sm:h-[66vh]"
    >
      <h1 className="p-12 text-4xl text-center">About</h1>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap justify-center basis-full sm:basis-2/5">
          <div className="flex justify-center basis-full">
            <div className="overflow-hidden bg-gray-400 rounded-full basis-1/2 sm:basis-2/5">
              <img src="../../public/me.png" alt="" />
            </div>
          </div>
          <div className="pt-8">
            <h2 className="text-3xl">Tim Silva</h2>
          </div>
        </div>
        <div className="text-left basis-full sm:basis-3/5">
          I come from a long family tree of bankers and often thought that being
          in the financial industry was also the right choice for me. I spent a
          few years working at a financial advisory firm and although I learned
          a lot I also came to the realization that I was not thrilled about
          pursuing a career in finance. When Covid-19 effectively shut down my
          college I decided to change paths and began exploring programming. I
          have always had a strong passion for computers/technology and I
          quickly found out just how much I enjoyed programming. In order to
          learn as much as I could, I enrolled in an accelerated program where I
          created several projects and collaborated with peers to learn the
          technologies and tools that are used in the industry today. I’m a
          people person with a love for building all the unique ideas that I can
          come up with. My current interests revolve around front-end web
          development, mostly React and Tailwind but I am always seeking to
          learn more.
        </div>
      </div>
    </section>
  );
}
