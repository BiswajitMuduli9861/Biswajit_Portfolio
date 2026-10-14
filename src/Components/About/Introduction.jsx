import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="about">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>
        <div className={"introduction " + themename}>
          <div className="introduction_logocontainer">
            <img
              src="https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?t=st=1737875987~exp=1737879587~hmac=4ce0c1418c827c91f2056c3cffe7ed4e8df1ee3b530dae1861aa6f83637418a9&w=740"
              alt="Biswajit Muduli - MERN-Stack Developer from Odisha"
            />
          </div>
          <div className="introduction_datacontainer">
            <h4>
              Hi! I am{" "}
              <span className="different">Biswajit Muduli</span>, a MERN-Stack
              Developer from{" "}
              <span className="different"> Odisha (India)</span>.
            </h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I am a <span className="different">MCA</span> Post graduate
              currently building production-grade software at{" "}
              <span className="different">Qloron Technology</span>,
              Hyderabad. My work spans enterprise design systems, AI-powered
              platforms, real-time applications, and serverless cloud
              architectures — including the{" "}
              <span className="different">Employee 360</span> for{" "}
              <span className="different"> CRM Sales</span> (49+ Web
              Components), <span className="different">HR Management System</span> (AI OCR
              automation platform), the{" "}
              <span className="different">Global Fintech Fest 2025</span>{" "}
              platform, and a fully serverless{" "}
              <span className="different">SEO Intelligence</span> system on AWS.
            </h4>
<h4 style={{ marginTop: "0.8em" }}>
  I have hands-on experience building{" "}
  <span className="different">MERN-stack web applications</span> using the{" "}
  <span className="different">MERN Stack (MongoDB, Express.js, React.js, and Node.js)</span>.
  I have worked on{" "}
  <span className="different">REST API development</span>,{" "}
  <span className="different">authentication</span>,{" "}
  <span className="different">role-based access control (RBAC)</span>,{" "}
  <span className="different">state management</span>, and{" "}
  <span className="different">responsive UI development</span>.
  I have also contributed to projects like{" "}
  <span className="different">CRM Sales Management</span>,{" "}
  <span className="different">HR Management System</span>, and{" "}
  <span className="different">Global Fintech Fest</span>, collaborating with
  senior developers to build scalable, maintainable, and user-friendly
  applications.
</h4>
            <h4 style={{ marginTop: "0.8em" }}>
              I am a <span className="different">true MERN-stack developer</span>{" "}
              who picks up new technologies fast — whether it's a new framework,
              cloud service, or tool, I adapt quickly and ship confidently. My
              stack covers{" "}
              <span className="different">
                React.js, Next.js, TypeScript, Node.js, MongoDB, Docker
              </span>
              , and everything in between.
            </h4>
            <h4 style={{ marginTop: "1em" }}>When I'm not coding:</h4>
            <h4 className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              Playing Outdoor Games
            </h4>
            <h4 className="different">
              <span className="icons">
                <ExitToAppIcon />
              </span>
              Travelling
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
