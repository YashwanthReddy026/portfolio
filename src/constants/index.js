import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  isro,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Product Design",
    icon: web,
  },
  {
    title: "Simulation",
    icon: mobile,
  },
  {
    title: "Mechatronics",
    icon: backend,
  },
  {
    title: "Automation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "National Institute of Technolgy, Silchar",
    icon: isro,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Designed and demonstrated the simulation and engineering drawings of the CAD model assembly which can automatically collect the hyper elastic chip with the help of a roller pair where one of the roller has spring loaded mechanism to accommodate for chip thickness.",
      "Learnt about the process of mixing, casting, machining and testing of solid propellants. I also learnt the usage of CNC tooperate a vertical turning mill machine perform face milling operation of Inhibition and turning of Insulation in Solid stage motors",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Got familiar with various challenges faced during the operation of vertical face milling machine in the Propellant and Inhibition Maching facilities.",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "ISRO(SDSC)",
    icon: isro,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Designed and demonstrated the simulation and engineering drawings of the CAD model assembly which can automatically collect the hyper elastic chip with the help of a roller pair where one of the roller has spring loaded mechanism to accommodate for chip thickness.",
      "Learnt about the process of mixing, casting, machining and testing of solid propellants. I also learnt the usage of CNC tooperate a vertical turning mill machine perform face milling operation of Inhibition and turning of Insulation in Solid stage motors",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Got familiar with various challenges faced during the operation of vertical face milling machine in the Propellant and Inhibition Maching facilities.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
