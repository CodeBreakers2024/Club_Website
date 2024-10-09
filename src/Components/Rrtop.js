import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Style from '../Stylesheets/Rtop.module.css';
import Mushan from "../Assets/mushanProject.jpeg";
import Tushar from "../Assets/tusharProject.jpeg"

function Rtop() {
  const projects = [
    {
      title: "Dexgrator : Suyog , Tushar",
      description: "A brief description of the project highlighting key features and technologies used. This could be 2-3 lines long for better context.",
      techStack: ["Solana", "Next.js", "Anchor"],
      liveUrl: "https://dexgrator.xyz",
      repoUrl: "https://github.com/dexgrator/Dex",
      image: "/path-to-project-image.jpg" // Fallback/preview image
    },
    {
      title: "supaDrawer : Tushar",
      description: "Description for another amazing project you've built. Highlight what makes this project special.",
      techStack: ["React Native", "realtime Database"],
      liveUrl: "#",
      repoUrl: "https://github.com/tusharpamnani/supaDrawer",
      image: Tushar
    },

    {
      title: "Gym Website : Aditya",
      description: "Description for another amazing project you've built. Highlight what makes this project special.",
      techStack: ["HTML", "CSS" , "Javascript" , "GSAP"],
      liveUrl: "https://adityaspande1.github.io/Gym-website/",
      repoUrl: "https://github.com/adityaspande1/Gym-website",
      image: "/path-to-project2-image.jpg"
    },

    {
      title: "The Last Take (Game) : Mushan",
      description: "Description for another amazing project you've built. Highlight what makes this project special.",
      techStack: ["React JS", "Socket IO" , "Node JS" , "WEB RTC" ,"Docker"],
      liveUrl: "#",
      repoUrl: "https://github.com/Khanba22/online-game",
      image: Mushan
    },

    {
      title: "kuki - esg made easy : Tushar",
      description: "Description for another amazing project you've built. Highlight what makes this project special.",
      techStack: ["Next JS", "Supabase" , "Python" , "Docker"],
      liveUrl: "https://kuki-project.netlify.app",
      repoUrl: "https://kuki-project.netlify.app",
      image: Mushan
    },

    {
      title: "Blockweave AI : Om , Jay",
      description: "Description for another amazing project you've built. Highlight what makes this project special.",
      techStack: ["Next JS" , "Anchor"],
      liveUrl: "https://www.blockweaveai.co/",
      repoUrl: "https://www.blockweaveai.co/",
      image: Mushan
    },
    // Add more projects...
  ];

  return (
    <div className={Style.rTop}>
      <div className={Style.head}>Projects</div>
      <div className={Style.wrap}>
        {projects.map((project, index) => (
          <div key={index} className={Style.topCard}>
            <div className={Style.proDetails}>
              <div className={Style.preview}>
              {project.liveUrl !== "#" ? (
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className={Style.projectIframe}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className={Style.projectIframe}
                />
              )}
              </div>
              <div className={Style.content}>
                <h3 className={Style.title}>{project.title}</h3>
                <p className={Style.description}>{project.description}</p>
                <div className={Style.techStack}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={Style.techItem}>{tech}</span>
                  ))}
                </div>
                <div className={Style.links}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={Style.link}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={Style.link}>
                    <Github size={16} /> Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rtop;
