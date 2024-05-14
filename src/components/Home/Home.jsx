import React, { useEffect, useState, useRef } from "react";
import "animate.css";
import "./Home.scss";
import Coding from "../../img/coding.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Letter from "../AnimatedLetters/Letter.jsx";
import { gsap } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";
// import Lottie from "react-lottie";
import CodingLottie from "./lottie.json";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [letterClass, setLetterClass] = useState("text-animate");
  const hello = ["H", "e", "l", "l", "o", ","];
  const myname = ["M", "y", " ", "N", "a", "m", "e", " ", "i", "s", " "];
  const name = ["A", "J", "A", "Y", "A", " ", "K", " ", "C"];

  const boxref = useRef();
  const socail1 = useRef();
  const socail2 = useRef();

  const socail3 = useRef();
  const socail4 = useRef();
  const socail5 = useRef();
  const info1 = useRef();
  const info2 = useRef();
  const info3 = useRef();
  const lottie = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });
  return (
    <div className="home-section " id="home">
      <ul className="header-social" ref={boxref}>
        <li ref={socail1}>
          <a href="#" className="rounded-circle github-link">
            {" "}
            <GitHubIcon className="github" />
          </a>
        </li>
        <li ref={socail2}>
          <a href="#" className="rounded-circle linkedIn-link">
            {" "}
            <LinkedInIcon className="linkedIn" />
          </a>
        </li>
        <li ref={socail3}>
          <a href="#" className="rounded-circle facebook-link">
            {" "}
            <FacebookIcon className="facebook" />
          </a>
        </li>
        <li ref={socail4}>
          <a href="#" className="rounded-circle twitter-link">
            {" "}
            <TwitterIcon className="twitter" />
          </a>
        </li>
        <li ref={socail5}>
          <a href="#" className="rounded-circle youtube-link">
            {" "}
            <YouTubeIcon className="youtube " />
          </a>
        </li>
      </ul>

      <div className="wrapper">
        <div className="row align-items-center">
          <div className="home-text">
            <h3 className="hello max-md:text-[20px] text-[30px]">
              <Letter letterClass={letterClass} strArray={hello} idx={1} />
            </h3>
            <h3 className="name max-md:text-[35px] text-[50px]">
              <Letter
                letterClass={`${letterClass} `}
                strArray={myname}
                idx={7}
              ></Letter>
              <span className="fullname">
                <Letter
                  letterClass={`${letterClass} `}
                  strArray={name}
                  idx={18}
                ></Letter>
              </span>
            </h3>
            <h4 ref={info1} className="profession">
              Web Developer
            </h4>
            <p>
              Passionate Web Developer skilled in frontend and backend
              technologies, dedicated to crafting innovative web solutions and
              aspiring to become a Full Stack Developer.
            </p>
            <Link to="contact">
              <span href="" className="btn btn-yellow slidebtn  ">
                Contact Me
              </span>
            </Link>
          </div>
          <div className="home-image" ref={lottie}>
            {/* <Lottie animationData={CodingLottie} loop={true}></Lottie> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
