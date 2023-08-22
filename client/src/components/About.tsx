import { about1, about2 } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-[#1A1D20] min-h-screen sm:min-h-[66vh]">
      <h1 className="p-12 text-4xl text-center">About</h1>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap justify-center basis-full lg:basis-1/3">
          <div className="flex justify-center basis-full">
            <div className="overflow-hidden bg-gray-400 rounded-full basis-1/3 lg:basis-2/5">
              <img src="../../public/me.png" alt="" />
            </div>
          </div>
          <div className="pt-8">
            <h2 className="text-3xl">Tim Silva</h2>
          </div>
        </div>
        <div className="p-4 text-center lg:text-left lg:text-xl basis-full lg:basis-2/3">
          <p>{about1}</p>
          <br />
          <p>{about2}</p>
        </div>
      </div>
    </section>
  );
}
