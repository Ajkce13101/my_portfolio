import React, { useRef, useEffect } from "react";
import "./Contact.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Connect from "../connect/Connect";
import Talk from "../talk/Talk";

function Contact() {
  const con1 = useRef();

  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="section-title column align-items-center">
            <h5 className="sub-title ">Contact</h5>
            <h3 className="main-title-dark">Get In Touch</h3>
            <ul className="line row align-items-center" ref={con1}>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row contact-info">
          <Connect></Connect>
        </div>

        <div className="project">
          <Talk></Talk>
        </div>
      </div>
    </section>
  );
}

export default Contact;
