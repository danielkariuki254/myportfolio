import React from "react";
import uoe from "../Assets/uoe1.jpg";
import kangaru from "../Assets/kangaru.webp";
import primary from "../Assets/primary.jpg";

function Education() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="school   rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
          <div className="aboutschool">
            <span className="text-muted fw-bolder text-center h6 fs-5">
              {" "}
              UNIVERSITY OF ELDORET (UoE).
            </span>{" "}
            <br></br>
            <span className="text-muted text-center h6 fs-6">
              {" "}
              2020-2024 April.
            </span>
            <br></br>
            <span className="text-muted text-center h6 fs-6 ">
              {" "}
              <i>Bch. Degree In COMPUTER SCIENCE.</i>
            </span>
            <img
              className="rounded-5 "
              src={uoe}
              alt="uoe"
              style={{
                width: "100%",
                height: "265px",
              }}
            />
          </div>
        </div>
        <div className="school rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
          <div className="aboutschool">
            <span className="text-muted fw-bolder text-center h6 fs-5">
              {" "}
              KANGARU SCHOOL.
            </span>{" "}
            <br></br>
            <span className="text-muted text-center h6 fs-6">
              {" "}
              2016-2019 Nov.
            </span>
            <br></br>
            <span className="text-muted text-center h6 fs-6">
              {" "}
              <i>Kenya Cert' Of Sec' Education (KCSE).</i>
            </span>
            <img
              className="rounded-5 "
              src={kangaru}
              alt="uoe"
              style={{
                width: "100%",
                height: "265px",
              }}
            />
          </div>
        </div>
        <div className="school  rounded-5 p-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-3">
          <div className="aboutschool">
            <span className=" text-muted  fw-bolder text-center h6 fs-5">
              {" "}
              ST FRANCIS RIMARY SCHOOL.
            </span>{" "}
            <br></br>
            <span className="text-muted text-center h6 fs-6">
              {" "}
              2005-2015 Nov.
            </span>
            <br></br>
            <span className="text-muted font-italic text-center h6 fs-6">
              {" "}
              <i>Kenya Cert' Of Pri' Education (KCPE).</i>
            </span>
            <img
              className="rounded-5 "
              src={primary}
              alt="primary"
              style={{
                width: "100%",
                height: "265px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
