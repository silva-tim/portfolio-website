type Link = {
  name: string;
  href: string;
};

export const links = <Link[]>[
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    projectNum: 2,
    name: "Nomad-Ventures",
    live: "https://nomad-ventures.silvatim.com",
    code: "https://github.com/silva-tim/nomad-ventures/",
    desc: "A full stack web application for travelers who want to blog about their adventures.",
    skills: [
      "React",
      "Node",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "Tailwind",
    ],
    image: "/nomad.png",
  },
  {
    projectNum: 1,
    name: "CountryGo",
    live: "https://silva-tim.github.io/country-go/",
    code: "https://github.com/silva-tim/country-go",
    desc: "A full stack web application for travelers who want to blog about their adventures.",
    skills: [
      "React",
      "Node",
      "Express",
      "PostgreSQL",
      "TypeScript",
      "Tailwind",
    ],
    image: "/nomad.png",
  },
];
