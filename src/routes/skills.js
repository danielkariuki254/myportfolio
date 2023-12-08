import React, { useEffect, useState } from "react";
import background2 from "../Assets/MERN.webp";
import background3 from "../Assets/reactnative.png";
import background4 from "../Assets/adobe.jpg";

function Skills() {
  const [fadeInIndex, setFadeInIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeInIndex((prevIndex) =>
        prevIndex < 2 ? prevIndex + 1 : prevIndex
      );
    }, 1000); // Adjust the delay as needed

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const skills = [
    {
      title: "Web Designer",
      background: background2,
      description: "",
    },
    {
      title: "Web Application Developer",
      background: background3,
      description: "",
    },
    {
      title: "Graphics Designer",
      background: background4,
      description: "Adobe",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills bg-white shadow rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 my-2"
            style={{
              backgroundImage: `url(${skill.background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "200px",
              opacity: fadeInIndex >= index ? 1 : 0,
              transition: "opacity 1s ease",
              animation: fadeInIndex >= index ? "slideIn 1s" : "none", // Apply animation when element is visible
            }}
          >
            <div className="about text-center">
              <span className="text-warning h4 fw-bolder">{skill.title}</span>
              <br></br>
              {skill.description && (
                <ul
                  className="text-center fw-bolder"
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <li>
                    <span>{skill.description}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
