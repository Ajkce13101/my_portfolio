import React, { useEffect, useRef } from "react";
import image from "../../img/about.jpg";
import "./About.scss";
import DownloadIcon from "@mui/icons-material/Download";

function About() {
  return (
    <section className="about-section " id="about">
      <div className="wrapper">
        <div className="row ">
          <div className="about-img">
            <div className="img-box">
              <img src={image} alt="" />
              <div className="about-shape"></div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-title">
              <h5 className="sub-title">About</h5>
              <h3 className="main-title">About Me ?</h3>
              <ul className="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <p>
              Enthusiastic Web Developer with more than 1 year of experience in
              designing and implementing innovative web solutions. Proven
              expertise in front-end and back-end development, with a passion
              for staying updated on emerging technologies. Excited to
              contribute technical proficiency and creative problem-solving
              skills to a dynamic development team. Currently specializing in
              both frontend and backend technologies like JavaScript,
              Typescript, and React JS, React Native, Python, Node JS with a
              keen eye on becoming a Full Stack Developer.
            </p>

            <button className="btn btn-yellow slidebtn downloadbtn">
              <a href="./AJ_CV.docx">
                Download CV <DownloadIcon className="download" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
