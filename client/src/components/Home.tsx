export default function Home() {
  return (
    <div id="home" className="flex items-center justify-center h-screen">
      <div className="text-center basis-2/3">
        <h1 className="font-mono text-8xl">Tim Silva</h1>
        <h2 className="text-4xl tracking-wider ps-3">
          Full Stack Web Developer
        </h2>
        <div className="flex justify-center">
          <button className="px-5 py-2 mt-8 text-2xl border-2 rounded-sm border-secondary text-secondary ms-2">
            Contact Me
          </button>
          <button className="px-5 py-2 mt-8 text-2xl border-2 rounded-sm border-secondary text-secondary ms-2">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
