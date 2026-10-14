import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import SocialLinks from "./SocialLinks";
import resume from "../../assets/Biswajit_Muduli_Resume.pdf";
import Me from "../../assets/Image.jpg";
import { Instagram as InstagramIcon, WhatsApp } from "@material-ui/icons";

export const openNew = () => {
  window.open(
    "https://drive.google.com/drive/folders/1oxWlecq-6y5MPHBA5_yasO1TbykqmbPT/"
  );
};

export const About = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <div className="hero" itemScope itemType="https://schema.org/Person">
        {/* Left */}
        <div className="hero__left" data-aos="fade-right">
          <p className="hero__greeting" data-aos="fade-right" data-aos-delay="0">
            Hi there, I'm
          </p>

          <h1
            className="hero__name"
            data-aos="fade-right"
            data-aos-delay="80"
            itemProp="name"
          >
            Biswajit Muduli
          </h1>

          <div className="hero__typewriter" data-aos="fade-right" data-aos-delay="160">
            <Type />
          </div>

          <div className="hero__meta" data-aos="fade-right" data-aos-delay="240">
            <span className="hero__tag">
              <span role="img" aria-label="location">📍</span> Bheteswar, Odisha
            </span>
            <span className="hero__tag">1.7+ Yrs Experience</span>
            <span className="hero__tag hero__tag--available">Available for Work</span>
          </div>

          <p className="hero__desc" data-aos="fade-right" data-aos-delay="300" itemProp="description">
            Full Stack Developer skilled in developing responsive frontend interfaces, secure backend APIs, database solutions, authentication, and scalable web applications using modern technologies.
{" "}
            <strong itemProp="worksFor">Qloron Technology</strong>,
            Hyderabad — previously contributed to{" "}
            <strong>Employee 360</strong> and{" "}
            <strong>Global Fintech Fest 2026</strong>.
          </p>

          <div className="hero__social" data-aos="fade-right" data-aos-delay="360">
            {[
              { href: "https://github.com/BiswajitMuduli9861/",                                          label: "GitHub",    icon: <GitHubIcon />,    cls: "gh"    },
              { href: "https://www.linkedin.com/in/biswajit-muduli-9a85a4267/",                              label: "LinkedIn",  icon: <LinkedInIcon />,  cls: "li"    },
              { href: "mailto:bmuduli126@gmail.com",                                          label: "Email",     icon: <EmailIcon />,     cls: "email" },
              { href: "tel:+919861591502",                                                         label: "Call",      icon: <PhoneIcon />,     cls: "phone" },
              { href: "https://wa.me/9861591502?text=Hi Biswajit, I came across your portfolio!", label: "WhatsApp",  icon: <WhatsApp />,      cls: "wa"    },
              { href: "https://www.instagram.com/coder_biswajit/",                                label: "Instagram", icon: <InstagramIcon />, cls: "ig"    },
            ].map(({ href, label, icon, cls }, i) => (
              <a
                key={cls}
                href={href}
                aria-label={label}
                target={href.startsWith("tel") ? "_self" : "_blank"}
                rel="noreferrer"
                className={`hero__social-link hero__social-link--${cls}`}
                data-tooltip={label}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="hero__actions" data-aos="fade-right" data-aos-delay="420">
            <a
              href={resume}
              download
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--primary"
              onClick={openNew}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="hero__btn hero__btn--outline"
              onClick={scrollToContact}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right — profile photo */}
        <div className="hero__right" data-aos="fade-left" data-aos-delay="200">
          <div className="hero__photo-ring">
            <img
              src={Me}
              alt="Biswajit Muduli — Full-Stack Developer from Kakatpur, Odisha"
              itemProp="image"
            />
          </div>
        </div>
      </div>

      <Introduction />
      <Timeline />
      <section id="skills">
        <Techstacks />
      </section>
      <SocialLinks />
    </>
  );
};
