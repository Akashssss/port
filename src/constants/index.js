import project1 from "../assets/projects/youtube-clone.png";
import project2 from "../assets/projects/vizualize.png";
import project3 from "../assets/projects/ecommerce.png";
import project4 from "../assets/projects/blog4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With extensive experience in React, Next.js, Node.js, and MongoDB, my goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a full stack developer specializing in the MERN stack, Next.js, Tailwind CSS, and Bootstrap. With a passion for crafting efficient web applications, I thrive on solving complex problems and delivering exceptional user experiences. I’m constantly seeking to learn and adapt, leveraging my skills to create innovative solutions that drive business success.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Angular Developer Trainee",
    company: "Soluzione IT Services",
    description: `Gaining practical knowledge in Angular through hands-on training and projects. Collaborating with team members to develop skills in software development aligned with industry standards.`,
    technologies: ["Angular", "JavaScript", "HTML", "CSS"],
},
  {
    year: "2023",
    role: "Intern Web Developer",
    company: "Saptkrishi Scientific at IIT Kanpur",
    description: `Maintained website responsiveness and created web pages. Designed a company brochure on Canva for a compelling first impression.`,
    technologies: ["React.js", "TailwindCSS", "Next.js"],
  },
];

export const PROJECTS = [
  {
    title: "Youtube Clone",
    image: project1,
    description:
      "A YouTube clone application using React JS and Material UI, featuring direct video playback, stunning video sections, custom categories, and channel pages.",
    technologies: ["React.js", "Material UI", "Rapid API"],
    link:'https://github.com/Akashssss/youtube-clone-js-mastey-'
  },
  {
    title: "Stack Viz & Sorting Visualizer",
    image: project2,
    description:
      "A web application for visualizing sorting algorithms and function signatures using React and D3.",
    technologies: ["React.js", "TailwindCSS", "Node.js", "D3.js"],
    link:'https://stack-visualizer.vercel.app/'
  },
  {
    title: "Shopdots (Team Project)",
    image: project3,
    description:
      "A multi-vendor e-commerce platform where users can become sellers or buyers, featuring a React-based frontend.",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB"],
    link:'https://shop-dot-v3-m3z4.vercel.app/'
  },
  {
    title: "MERN Stack Blogging Website",
    image: project4,
    description:
      "A fully-featured blogging platform with a modern editor, responsive design, notification system, and comments functionality.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link:'https://github.com/Akashssss/mern-blog-v1-public-'
  },
];

export const CONTACT = {
  address: "Lajpat nagar, Kanpur, India",
  phoneNo: "+91 9696285593",
  email: "akashsingh43457@gmail.com",
};
