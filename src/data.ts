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
      "AWS",
    ],
    image: "/images/nomad-ventures.png",
  },
  {
    projectNum: 1,
    name: "CountryGo",
    live: "https://silva-tim.github.io/country-go/",
    code: "https://github.com/silva-tim/country-go",
    desc: "A front end web application for people who want to create a bucket list of countries to travel to.",
    skills: ["JavaScript", "HTML", "CSS", "Rest API"],
    image: "/images/countrygo.png",
  },
  {
    projectNum: 3,
    name: "silvatim.com (this site)",
    live: "https://silvatim.com/",
    code: "https://github.com/silva-tim/portfolio-website",
    desc: "A front end web application to show off my portfolio projects while toying with some new tools I'm learning.",
    skills: ["React", "TypeScript", "Tailwind", "Framer Motion", "AWS"],
    image: "/images/silvatim.png",
  },
];

export const skills = [
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png?20210407134359",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
    link: "https://react.dev/",
  },
  {
    name: "Node",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355",
    link: "https://nodejs.org/en",
  },
  {
    name: "Express",
    image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png?20080116191800",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Tailwind",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
    link: "https://tailwindcss.com/",
  },
  {
    name: "VSCode",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png?20160530175649",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    link: "https://git-scm.com/",
  },
  {
    name: "Github",
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/",
  },
];
