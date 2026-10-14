import React from "react";
import "./WorkProjects.css";
import hr_image from "../../assets/Hrm.jpg";
import employee from "../../assets/employee.webp";
import gffVideo from "../../assets/GFF-Tech.mp4";
import lexibitVideo from "../../assets/Lexibit.mp4";

const workProjects = [
  {
    id: 1,
    company: "Global Fintech Fest 2026",
    title: "GFF 2026 — Event Platform",
    mediaType: "video",
    mediaSrc: gffVideo,
    mediaAlt: "Global Fintech Fest 2026",
    description:
      "Contributed to the official Global Fintech Fest 2025 platform, working with senior developers on Strapi CMS to manage backend modules — Sessions, Events, Speakers, Hackathons, and Live Event Management. Delivered fast, controlled REST APIs leveraging Strapi's component-based architecture, ensuring high maintainability and rapid feature rollout at scale for India's largest fintech event.",
    tech: ["Strapi CMS", "React.js", "Node.js", "REST API", "MongoDB", "TypeScript", "Component-based CMS"],
    liveUrl: "https://2025.globalfintechfest.com/",
    liveLabel: "Visit Live Site",
  },
  {
  id: 2,
  company: "Qloron Technology",
  title: "Employee 360 — Employee Management System",
  mediaType: "image",
  mediaSrc: employee,
  mediaAlt: "Employee 360 Dashboard",
  description:
    "Worked with the development team on Employee 360, a comprehensive employee management platform designed to streamline HR operations and employee data management. Implemented employee profiles, department and designation management, reporting managers, and employment status tracking. Developed reusable React components, integrated REST APIs, and implemented CRUD operations, search, filtering, and pagination for managing 1,000+ employee records. Implemented role-based access control (RBAC) for Admin, HR, Manager, and Employee roles, along with Redux Toolkit for efficient state management, form validation, and error handling.",
  tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "REST APIs", "RBAC", "Tailwind CSS"],
  liveUrl: "",
  liveLabel: "Visit Live Site",
},
  {
  id: 3,
  company: "Qloron Technology",
  title: "HR Management — Smart HR Management System",
  mediaType: "image",
  mediaSrc: hr_image,
  mediaAlt: "HR Management System Dashboard",
  description:
    "Worked with the development team on a comprehensive HR Management System designed to automate and streamline daily HR operations. Contributed to features including employee management, live location tracking, attendance with punch-in/punch-out, asset management, expense tracking, task management, leave management, performance tracking, and learning management. Integrated REST APIs, implemented role-based access control (RBAC), and developed responsive, reusable React components for efficient HR workflows. Also contributed to AI-powered chatbot support to improve employee assistance and reduce manual HR tasks.",
  tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "REST APIs", "RBAC", "Geolocation API", "AI Chatbot", "Tailwind CSS"],
  liveUrl: "",
  liveLabel: "Visit Live Site",
},
];

export const WorkProjects = () => {
  return (
    <section className="section work-projects-section" id="work-projects">
      <h2 className="section__title different" data-aos="fade-right">
        Work Projects
      </h2>
      <p className="section__subtitle" data-aos="fade-up">
        Enterprise &amp; client work shipped in production — private repos, live products
      </p>
      <div style={{ textAlign: "center" }}>
        <span className="work-projects-badge" data-aos="fade-up">
          Professional &amp; Client Work
        </span>
      </div>
      <div className="work-grid">
        {workProjects.map((proj) => (
          <div className="work-card" key={proj.id} data-aos="fade-up">
            <div className="work-card__media">
              {proj.mediaType === "video" ? (
                <video
                  src={proj.mediaSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={proj.mediaAlt}
                />
              ) : (
                <img src={proj.mediaSrc} alt={proj.mediaAlt} />
              )}
              <span className="work-card__company-tag">{proj.company}</span>
            </div>
            <div className="work-card__body">
              <h3 className="work-card__title">{proj.title}</h3>
              <p className="work-card__desc">{proj.description}</p>
              <div className="work-card__tech">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="work-card__actions">
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="work-btn">
                  {proj.liveLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
