type props = {
  skill: {
    name: string;
    image: string;
    link: string;
  };
};

export default function SkillCard({ skill }: props) {
  return (
    <a
      href={skill.link}
      className="xl:basis-1/6 basis-full sm:basis-1/3"
      target="_blank"
    >
      <div className="flex flex-wrap justify-center h-40 bg-white rounded-sm">
        <img src={skill.image} alt={skill.name} className="mt-4 h-1/2" />
        <span className="text-center basis-full text-main">{skill.name}</span>
      </div>
    </a>
  );
}
