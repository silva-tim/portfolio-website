type props = {
  project: {
    name: string;
    live: string;
    code: string;
    desc: string;
    skills: string[];
    image: string;
  };
};

export default function Project({ project }: props) {
  return (
    <div className="relative flex overflow-hidden text-black transition bg-white rounded-sm h-80 basis-1/2 group hover:bg-opacity-90">
      <div className="flex flex-wrap pt-10 basis-1/2 ps-10">
        <h2 className="text-2xl basis-full">{project.name}</h2>
        <p className="h-32 py-2">{project.desc}</p>
        <div className="basis-full">
          <ul className="flex flex-wrap gap-1">
            {project.skills.map((i) => (
              <li key={i} className="px-4 text-sm rounded-full bg-secondary">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 py-3">
          <a
            href={project.live}
            target="_blank"
            className="px-6 py-2 text-white rounded-sm bg-main"
          >
            Live
          </a>
          <a
            href={project.code}
            target="_blank"
            className="px-5 py-2 border border-black rounded-sm"
          >
            Code
          </a>
        </div>
      </div>
      <div className="absolute w-3/4 transition top-14 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 -right-80">
        <img src={project.image} alt="" className="scale-125 rounded-md" />
      </div>
    </div>
  );
}
