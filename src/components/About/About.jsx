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
              Enthusiastic IT Support professional with hands-on experience in
              troubleshooting, technical support, and customer service. Skilled
              in resolving issues across Windows systems, Office 365, Active
              Directory, and network connectivity, including VLANs, DNS, DHCP,
              and VPNs. Passionate about technology and continuous learning,
              with strong communication skills and a proven ability to assist
              users effectively. Currently building expertise in Microsoft 365,
              Azure Active Directory, and server administration, while
              strengthening networking knowledge to grow into advanced IT
              support and system administration roles
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
