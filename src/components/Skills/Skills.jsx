import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import Html from "../../img/html.svg";
import Css from "../../img/css.svg";
import Js from "../../img/js.svg";
import Sass from "../../img/sass.svg";
import Typescriot from "../../img/typescript.svg";
import Reacticon from "../../img/react.svg";
import Redux from "../../img/redux.svg";
import Node from "../../img/nodejs.svg";
import Npm from "../../img/npm.svg";
import Mongodb from "../../img/mongodb.svg";
import Express from "../../img/express.svg";
import Bootstrap from "../../img/bootstrap.svg";
import Material from "../../img/material.svg";
import Git from "../../img/git.svg";
import Github from "../../img/github.svg";
import VerifiedIcon from "@mui/icons-material/Verified";
import Tilt from "react-parallax-tilt";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function Skills() {
  const skill1 = useRef();
  const skill2 = useRef();
  const skill3 = useRef();
  const skill4 = useRef();
  const skill5 = useRef();
  const skill6 = useRef();

  const icons = [
    { id: 1, icon: Html, value: "Html" },
    { id: 2, icon: Css, value: "CSS" },
    { id: 3, icon: Js, value: "Javascript" },
    { id: 4, icon: Sass, value: "SASS" },
    { id: 5, icon: Typescriot, value: "Typescript" },
    { id: 6, icon: Reacticon, value: "React JS" },
    { id: 7, icon: Redux, value: "Redux" },
    { id: 8, icon: Node, value: "Node JS" },
    { id: 9, icon: Express, value: "Express" },
    { id: 10, icon: Npm, value: "NPM" },
    { id: 11, icon: Mongodb, value: "Mongodb" },
    { id: 13, icon: Bootstrap, value: "Bootstrap" },
    { id: 14, icon: Material, value: "Material UI" },
    { id: 15, icon: Git, value: "Git" },
    { id: 16, icon: Github, value: "Github" },
  ];

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#2453ff",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#2453ff",
      fontSize: 15,
    },
  }));

  const data = [
    { id: 1, label: "HTML/CSS", width: 90 },
    { id: 2, label: "Javascript", width: 80 },
    { id: 3, label: "React", width: 85 },
    { id: 4, label: "Node Js", width: 55 },
  ];

  return (
    <section className="skills-section pb-100" id="skills">
      <div className="wrapper">
        <div className="row align-items-center ">
          <div className="section-title column align-items-center  ">
            <h5 className="sub-title " ref={skill1}>
              Skills
            </h5>
            <h5 className="main-title" ref={skill2}>
              What I Kow
            </h5>
            <ul className="line" ref={skill3}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-10 items-center justify-between max-md:flex-col">
          <div className="frontend h-full w-full">
            <Tilt>
              <div className="info">
                <h1 className="title blue-text-gradient">Frontend:</h1>
                <div className="list pr-2">
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">React JS</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Next JS</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Typescript</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> React Native</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Redux</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Sass</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Styled Components</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Tailwind CSS</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">Figma</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">Jest and React Testing Library</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="frontend w-full h-full ">
            <Tilt>
              <div className="info h-full ">
                <p className="title blue-text-gradient ">Backend:</p>
                <div className="list">
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">Node JS</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Express JS</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">Rest APIs</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Flask</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> My SQL</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> PostgreSQL</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> MongoDB</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> AWS & Azure</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech"> Docker</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">CI CD pipelines</span>
                  </div>
                  <div className="listItem">
                    <span>
                      <VerifiedIcon className="check"></VerifiedIcon>
                    </span>
                    <span className="tech">Python</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        <div className="row">
          <div className="skill-img" ref={skill5}>
            <div className="section-title">
              <h3 className="sub-title-white">Tools & Technologies:</h3>
            </div>
            <div className="row icons-row">
              {icons.map((item) => {
                return (
                  <BootstrapTooltip
                    title={item.value}
                    className="tooltip"
                    key={item.id}
                  >
                    <div
                      ref={skill6}
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5 tech-icon"
                      id="html-5"
                    >
                      <svg>
                        <image href={item.icon}></image>
                      </svg>
                    </div>
                  </BootstrapTooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
