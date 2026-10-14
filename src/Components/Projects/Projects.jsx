import React, { useState, useEffect } from "react";
import "./Projects.css";

import GameBoard from "../../assets/snake-and-ladder/GameBoard.png";
import LeaderBoard from "../../assets/snake-and-ladder/leader-board.png";
import MatchHistory from "../../assets/snake-and-ladder/match-history.png";
import HealSphere from "../../assets/HealSphere.png";

import Socialmedia1 from "../../assets/SocialMedia.png";
import Socialmedia2 from "../../assets/SocialMedia2.png";


const socialmedia = [Socialmedia1, Socialmedia2];

/* Two stacked images — crossfade by toggling which slot is "active" */
const CyclingImage = ({ images, alt }) => {
  const [slots, setSlots] = useState({ a: 0, b: 1, active: "a" });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlots((prev) => {
        const inactive = prev.active === "a" ? "b" : "a";
        const nextIdx = (prev[prev.active] + 1) % images.length;
        return { ...prev, [inactive]: nextIdx, active: inactive };
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="cycling-wrap">
      <img
        src={images[slots.a]}
        alt={alt}
        className={`cycling-img ${slots.active === "a" ? "cycling-img--on" : "cycling-img--off"}`}
      />
      <img
        src={images[slots.b]}
        alt={alt}
        className={`cycling-img ${slots.active === "b" ? "cycling-img--on" : "cycling-img--off"}`}
      />
    </div>
  );
};

const projects = [
  {
    id: 8,
    title: "PingUp — Full-Stack Social Media Platform",
    images: socialmedia,
    alt: "PingUp Social Media Platform",
    desc: "Developed a full-stack social media web application using the MERN stack, allowing users to connect, share posts, create stories, and communicate in real time. Implemented user authentication with Clerk, image and media uploads using ImageKit, and real-time chat functionality using Server-Sent Events (SSE). Integrated Redux Toolkit for state management and Inngest for background event processing. The application also includes user profiles, connection requests, and user discovery features.",
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Redux toolkit", "TailwindCSS", "Clerk"],
    live: "https://connectly-umber.vercel.app/",
    code: "https://github.com/BiswajitMuduli9861/Social-Media-App",
  },
  {
    id: 7,
    title: "HealSphere — Full-stack Hospital Management System",
    image: HealSphere,
    alt: "Healsphere",
    desc: "Developed a full-stack hospital management web application using the MERN stack, enabling patients to book doctor appointments, manage their profiles, and view appointment details. Implemented role-based access for Admin, Doctors, and Patients, along with secure JWT authentication. Integrated Cashfree payment gateway for online appointment payments and Cloudinary for image uploads. Built RESTful APIs to manage doctors, appointments, availability, and patient records, with a responsive React.js interface for a smooth user experience.",
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Redux toolkit", "TailwindCSS"],
    live: "https://healsphere-sigma.vercel.app/",
    code: "https://github.com/BiswajitMuduli9861/Doctors-Appointment-Project-Start",
  },
];

export const Projects = () => {
  return (
    <div className="section" id="projects">
      <h2 className="section__title different" data-aos="fade-right">
        Personal Projects
      </h2>
      <p className="section__subtitle" data-aos="fade-up">
        Open-source and learning projects that shaped my engineering foundations
      </p>
      <div className="allProjects">
        {projects.map((proj, i) => (
          <div
            className="projects_container"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={i * 60}
            key={proj.id}
          >
            <div className="project">
              <div className="project_videocontainer">
                {proj.images ? (
                  <CyclingImage images={proj.images} alt={proj.alt} />
                ) : (
                  <img src={proj.image} alt={proj.alt} />
                )}
              </div>
              <div className="project_information">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                <div className="project__chips">
                  {proj.tech.map((t) => (
                    <span key={t} className="project__chip">{t}</span>
                  ))}
                </div>
                <div className="project__actions">
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    <span className="btns onbt">See this Live</span>
                  </a>
                  <a href={proj.code} target="_blank" rel="noreferrer">
                    <span className="btns onbt">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
