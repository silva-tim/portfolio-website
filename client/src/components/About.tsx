import { about1, about2 } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-[#1A1D20] min-h-screen sm:min-h-[66vh]">
      <h1 className="p-12 text-4xl text-center">About</h1>
      <div className="flex flex-wrap w-11/12 m-auto">
        <div className="flex flex-wrap justify-center h-60 basis-full lg:basis-1/3">
          <div className="text-center">
            <img
              src="/me.png"
              alt=""
              className="m-auto bg-gray-400 rounded-full h-1/2"
            />
            <h2 className="mt-6 text-3xl lg:mt-10">Tim Silva</h2>
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
