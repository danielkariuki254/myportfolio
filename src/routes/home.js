import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../Assets/bg1.jpg";
import bg1 from "../Assets/compbg2.jpg";
import Typewriter from "./typewriter";

import Education from "../routes/education";
import Skills from "../routes/skills";
import Projects from "../routes/projects";
import Testimonials from "../routes/testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const whatsappLink = "https://wa.me/+254798789477";

function Home() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const sentences = [
    "Hey, There! 👋",
    "This is Daniel Kariuki.",
    "A Web Designer.",
    "A Web Application Developer.",
    "A Graphics Designer.",
    "Hire Me!!!",
  ];

  return (
    <div
      className="container-fluid bg-dark "
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="row"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="myname col-lg-12 col-md-12 col-sm-12 col-12 text-dark h1 fw-bolder mt-5">
          <h1 className="display-1 fw-bolder">
            Daniel <span className="text-primary">Kariuki</span>
          </h1>
          <div className="text-warning" style={{ height: "100px" }}>
            <h4>
              <Typewriter sentences={sentences} speed={150} />
            </h4>
          </div>
        </div>
        <div
          className="col-lg-12 col-md-12 col-sm-12 col-12"
          style={{
            height: "150px",
          }}
        >
          {/* <img src={avatarImage} alt="Coding Avatar" /> */}
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-center text-dark">
          <span
            className={`toggle-text ${
              activeTab === "education" ? "text-success" : ""
            }`}
            onClick={() => handleTabClick("education")}
            style={{ cursor: "pointer" }}
          >
            <span className="  fw-bolder h4 ">Education</span>
          </span>
          <span className="ms-3"></span> {/* Add space */}
          <span
            className={`toggle-text ${
              activeTab === "skills" ? "text-success " : ""
            }`}
            onClick={() => handleTabClick("skills")}
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bolder h4">Skills</span>
          </span>
          <span className="ms-3"></span> {/* Add space */}
          <span
            className={`toggle-text ${
              activeTab === "projects" ? "text-success " : ""
            }`}
            onClick={() => handleTabClick("projects")}
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bolder h4">Projects</span>
          </span>
        </div>
        <div className="mt-4">
          {activeTab === "education" ? <Education /> : null}
          {activeTab === "skills" ? <Skills /> : null}
          {activeTab === "projects" ? <Projects /> : null}
        </div>
      </div>

      <Testimonials />

      <footer className="text-center text-warning p-3">
        <h5 className="text-white">WhatsApp Me 👇</h5>
        <p className=" font-weight-bold">
          &copy; 2023 DanielK{" "}
          <span className=" fw-bolder">
            <a
              href={whatsappLink}
              target="_blank"
              className="text-decoration-none text-success"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-success " />{" "}
              0798789477
            </a>
          </span>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
