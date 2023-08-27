type props = {
  project: {
    name: string;
    live: string;
    code: string;
    desc: string;
  };
};

export default function Project({ project }: props) {
  return (
    <div className="bg-slate-500 basis-1/3">
      <h2>{project.name}</h2>
      <p>{project.desc}</p>
    </div>
  );
}
