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

export const projects = {
  nomadVentures: {
    name: "Nomad-Ventures",
    live: "https://nomad-ventures.silvatim.com",
    code: "https://github.com/silva-tim/nomad-ventures/",
    desc: "A full stack web application for travelers who want to blog about their adventures.",
  },
  countryGo: {
    name: "CountryGo",
    live: "https://silva-tim.github.io/country-go/",
    code: "https://github.com/silva-tim/country-go",
  },
};
