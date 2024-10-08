import { Project } from "../../models/project";


export const PROJECTS: Project[] = [

 {
    project: "SSO using CAS",
    stack: ["Java", "Shell", "Ldap"],
    description: "Implementing a Single Sign-On (SSO) authentication system using CAS (Central Authentication Service)",
    website: "",
    report: "assets/reports/CAS.pdf",
    github: "https://github.com/zaim001/SSO-using-CAS",
    image:"./assets/images/cas.jpg",
    status: "Live"
  },
  {
    project: "findmyjob",
    stack: ["Python", "Selenium"],
    description:"This project contains Python scripts to scrape job data from LinkedIn, Indeed, and Rekrute. The data is saved into CSV and Excel files.",
    website: "#",
    report: "",
    github: "https://github.com/zaim001/findMyJob",
    image:"./assets/images/scrapper.png",
    status: "Live"
  },
  {
    project: "Angular Portfolio",
    stack: ["Angular", "Typescript", "Scss"],
    description: "Portfolio using Angular 17",
    website: "https://badreddinezaim.netlify.app",
    report: "",
    github: "https://github.com/zaim001/angular_portfolio",
    image:"./assets/images/portfolio.png",
    status: "Live"
  },
  {
    project: "MyShop",
    stack: ["Angular", "Spring Boot","Keycloak","PostgreSql","Scss"],
    description:"Full Stack E-commerce app using Spring boot Backend + Angular Frontend & Keyclaok for identity and access management",
    website: "#",
    report: "",
    github: "https://github.com/zaim001/MyShop",
    image:"./assets/images/myshop.png",
    status: "InDev"
  },
  {
    project: "MovGame",
    stack: ["Angular", "Spring Boot","PostgreSql","Tailwind","Youtube Api","Gemini Api"],
    description:"Recommending games based on user input of movies or TV shows. using Gemini Api to handle user prompt then show games and game details with the Rawg Api & Youtube Api",
    website: "https://movigames.netlify.app",
    report: "",
    github: "https://github.com/zaim001/MovGame",
    image:"./assets/images/movgame.png",
    status: "InDev"
  },
  {
    project: "Soon",
    stack: ["", ""],
    description:"",
    website: "#",
    report: "",
    github: "#",
    image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
    status: "InDev"
  },

  
];