import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import BloggerIcon from "./../public/assets/icons/BloggerIcon.png";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Fullstack Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "DevOps",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },

];

const technologies = {
  programmingLanguages: [
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/c++.png",
      link: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
  webDevelopment: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "Bootstrap 5",
      icon: "/assets/tech/bootstrap5.png",
      link: "https://getbootstrap.com/",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://reactjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/",
    },
  ],
  mobileAppDevelopment: [
    {
      name: "React Native",
      icon: "/assets/tech/react-native.svg",
      link: "https://reactnative.dev/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  databaseTechnologies: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
  devOpsAndTools: [
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins.png",
      link: "https://www.jenkins.io/",
    },
    {
      name: "Kubernetes",
      icon: "/assets/tech/kubernetes.png",
      link: "https://kubernetes.io/",
    },
    {
      name: "Prometheus",
      icon: "/assets/tech/prometheus.svg",
      link: "https://prometheus.io/",
    },
    {
      name: "Grafana",
      icon: "/assets/tech/grafana.png",
      link: "https://grafana.com/",
    },
  ],
  versionControl: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
  ],
  cmsAndDesign: [
    {
      name: "WordPress",
      icon: "/assets/tech/wordpress.png",
      link: "https://wordpress.org/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  apiTesting: [
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
  ],
};


const experiences = [
   {
    title: "Web Developer",
    company_name: "Web Developer Intern at Unified Mentor",
    icon: "/assets/company/unified-mentor.png",
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Built a Scientific Calculator and a To-Do List application as part of assigned projects.",
      "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
      "Learned and implemented JavaScript local storage for persisting user data.",
      "Strengthened core skills in JavaScript, HTML, and CSS through hands-on web development tasks",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Intern at Ceiyone Tech Works Private Limited,",
    icon: "/assets/company/Ceiyone.png",
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    points: [
      "Gained hands-on experience with WordPress development, including theme customization and plugin integration.",
      "Worked on live client projects, contributing to real-time website updates and functionality improvements.",
      "Learned to manage hosting services via Hostinger, including domain setup, cPanel configurations, and deployment.",
      "Replicated an e-commerce portfolio site for a perfume shop with a focus on responsive design and clean UI/UX.",
    ],
  },
  {
    title: "App Developer Intern",
    company_name: "Intern at Ligths Inc",
    icon: "/assets/company/Ligths.png",
    iconBg: "#fffff",
    date: "September 2024 - April 2025",
    points: [
      "Collaborated with a team to build Expense Tracker and FIRE Number Calculator apps using React Native.",
      "Gained practical experience in mobile app development, API integration, and deployment using Render.com.",
      "Learned fintech fundamentals and interacted with foreign investors, gaining valuable insights into the startup and finance ecosystem.",
      "Enhanced skills in team collaboration, agile development, and UI/UX design for mobile platforms.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NueroCare - AI Driven Chatbot for Mental Wellness",
    description:
      "NeuroCare is a React Native app for mental wellness with AI chat, mood detection, emotion analysis, local help, and self-care tools — all privacy-focused.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "react-native",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/neurocare2.png",
    source_code_link: "https://github.com/SanmathiSedhupathi/NeuroCare_Horizon.git",
    deployed_link: "https://github.com/SanmathiSedhupathi/NeuroCare_Horizon.git",
  },
  {
    name: "RecipeNest",
    description:
      "RecipeNest is a MERN stack web app for creating, exploring, and sharing recipes with ingredients, steps, and images — built for an intuitive and responsive user experience.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/recipenest.png",
    source_code_link: "https://github.com/SanmathiSedhupathi/FoodNest.git",
    deployed_link: "https://github.com/SanmathiSedhupathi/FoodNest.git",
  },
  
  {
    name: "AI Image Generator",
    description:
      "A full-stack AI image generator web application built using the MERN stack and powered by Hugging Face's Stable Diffusion API to convert text prompts into images. Users can generate images, view them in a community feed, and share their creations.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "docker",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/aiimage.png",
    source_code_link:
      "https://github.com/SanmathiSedhupathi/AI_IMAGE_GENERATOR_MERN.git",
    deployed_link:
      "https://github.com/SanmathiSedhupathi/AI_IMAGE_GENERATOR_MERN.git",
  },

];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/SanmathiSedhupathi",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "www.linkedin.com/in/sanmathi-sedhupathi08",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://sanmathisedhupathi06.blogspot.com/",
  },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "DevOps",
  500,
  "Full-Stack developer",
  500,
  "Mobile Application Developer",
  500,
  "Web Application Developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
