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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import intellicane from "../assets/intellicane.png";
  import SOS from "../assets/SOS.png";
  
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
      title: "Full-Stack Applications",
      icon: web, // Replace with the appropriate icon path
    },
    {
      title: "Machine Learning Projects",
      icon: mobile, // Replace with the appropriate icon path
    },
    {
      title: "IoT Solutions",
      icon: backend, // Replace with the appropriate icon path
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
      title: "Project Manager, Engineering Strategies and Practice II",
      company_name: "University of Toronto (APS112)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024 - April 2024",
      points: [
        "Designed and implemented a Google Home-based smart home system for a three-story residential property.",
        "Led a six-member team, utilized Agile methodologies, worked with a stakeholder, a P.Eng Manager, to ensure the solution met their requirements, ensured regulatory compliance, and created comprehensive implementation guides to support scalability and ease of installation.",
        "Delivered a scalable, cost-effective, and fully integrated smart home system that enhanced comfort, convenience, and security, met all regulatory standards, and ensured future expandability.",
      ],
    },
    {
      title: "Lead STEM Instructor",
      company_name: "e2youngEngineers",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - July 2023",
      points: [
        "Taught 170+ students about Lego robotics, VEX robotics, Java, and Scratch Jr.",
        "Created a curriculum geared towards STEM and especially those focused on programming and Artificial Intelligence",
        "Mentored 5 assistant instructors about designing lesson plans and classroom management.",
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
      name: "RayStock",
      description:
        "RayStock is a full-stack inventory management dashboard built with Next.js, Tailwind CSS, and PostgreSQL. It features a data visualization using Recharts, state management with Redux Toolkit, and a backend powered by Node.js and Prisma ORM.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/RayanAhsan/RayStock--Full-Stack-Inventory-Management-Website/tree/master",
    },
    {
      name: "Pokedex",
      description:
        "Pokedex is a full-stack Pokémon encyclopedia built with React, TypeScript, and SCSS, using PokeAPI for dynamic data. Features include Google Authentication via Firebase, Firestore storage, and an aesthetic UI for easy navigation. Users can view, compare Pokémon, and create custom lists by signing in with their email.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/RayanAhsan/Pokedex",
    },
    {
      name: "Speech-Bot",
      description:
        "Speech Bot is a full-stack app for real-time transcription and translation. Powered by OpenAI Whisper and Xenova NLLB, it transcribes speech, translates text into multiple languages, and exports results as PDFs or TXTs. Built with React, Tailwind CSS, and Node.js for a sleek, user-friendly experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI Whisper",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "Xenova Model",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/RayanAhsan/Speech-Bot",
    },
    {
      name: "IntelliCane- MakeUoft2024 Accessibility Award Winner",
      description:
        "IntelliCane is an innovative assistive device that combines IoT and AI technologies to improve mobility and safety for visually impaired users. Equipped with sensors, a camera, and advanced object detection capabilities. Link to Devpost: https://devpost.com/software/intellicane-gjqo0a",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RaspberryPI",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "YOLOv8",
          color: "green-text-gradient",
        },
        {
          name: "Object Detection",
          color: "pink-text-gradient",
        },
      ],
      image: intellicane,
      source_code_link: "https://github.com/RayanAhsan/IntelliCane-MakeUoft2023-Winner",
    },
    {
      name: "SOS (ECE241 Final Project)",
      description:
        "SOS Game is a Verilog-based digital logic project featuring game logic, keyboard input, and VGA output. SOS is a more advanced version of tic tac toe that is built for an FPGA; it integrates shift registers, flip-flops, state machines, debouncing techniques, and more. The game also includes VGA interface for visual game play, keyboard interfacing.",
      tags: [
        {
          name: "Verilog",
          color: "blue-text-gradient",
        },
        {
          name: "FPGA",
          color: "green-text-gradient",
        },
        {
          name: "VGA",
          color: "pink-text-gradient",
        },
        {
          name: "PS2 Keyboard",
          color: "blue-text-gradient",
        },
      ],
      image: SOS,
      source_code_link: "https://github.com/RayanAhsan/SOS",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };