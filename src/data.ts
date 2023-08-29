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
    image: "/nomad-ventures.png",
  },
  {
    projectNum: 1,
    name: "CountryGo",
    live: "https://silva-tim.github.io/country-go/",
    code: "https://github.com/silva-tim/country-go",
    desc: "A front end web application for people who want to create a bucket list of countries to travel to.",
    skills: ["JavaScript", "HTML", "CSS", "Rest API"],
    image: "/countrygo.png",
  },
  {
    projectNum: 3,
    name: "This Website",
    live: "https://silvatim.com/",
    code: "https://github.com/silva-tim/portfolio-website",
    desc: "A front end web application to show off my portfolio projects while toying with some new tools I'm learning.",
    skills: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/silvatim.png",
  },
];
