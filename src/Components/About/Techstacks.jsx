import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaGit, FaDocker, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiPostman,
  SiTypescript,
  SiMongodb,
  SiStrapi,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { FaNpm } from "react-icons/fa";

const skills = [
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <DiCss3 />, label: "CSS3" },
  { icon: <FaReact />, label: "React.js" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <SiStrapi />, label: "Strapi" },
  { icon: <VscGithub />, label: "GitHub" },
  { icon: <FaGit />, label: "Git" },
  { icon: <FaNpm />, label: "NPM" },
  { icon: <SiPostman />, label: "Postman" },
];

export const Techstacks = () => {
  return (
    <div className="section main" data-aos="fade-right" id="skills">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        {skills.map(({ icon, label }) => (
          <div key={label}>
            {icon}
            <h5>{label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
