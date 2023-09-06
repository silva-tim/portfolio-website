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
      className="transition xl:basis-1/6 basis-full sm:basis-1/3 hover:scale-105"
      target="_blank"
    >
      <div className="flex flex-wrap justify-center h-40 bg-white rounded-sm">
        <img src={skill.image} alt={skill.name} className="mt-4 h-1/2" />
        <span className="text-center text-main basis-full">{skill.name}</span>
      </div>
    </a>
  );
}
