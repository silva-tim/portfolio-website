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
    <div className="text-black rounded-sm bg-secondary h-80 basis-1/2">
      <div className="flex p-10">
        <div className="flex flex-wrap basis-1/2">
          <h2 className="text-2xl basis-full">{project.name}</h2>
          <p className="h-32 py-2">{project.desc}</p>
          <div className="basis-full">
            <ul className="flex flex-wrap gap-1">
              {project.skills.map((i) => (
                <li
                  key={i}
                  className="px-4 text-sm text-white rounded-full bg-main"
                >
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
      </div>
    </div>
  );
}
