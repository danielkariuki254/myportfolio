import React from "react";
import background5 from "../Assets/coming.webp";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="comingsoon shandwo rounded-5 col-lg-12 col-sm-12 col-md-12 col-12 my-2"
          style={{
            backgroundImage: `url(${background5})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "300px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Projects;
