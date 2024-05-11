import React from "react";
import "./App.scss";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Education from "./Components/Education/Education.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navabr/Navbar.jsx";

const App = () => {
  return (
    <div className="App">
      <div className="landing">
        <div className="landing-bg">
          <Navbar />

          <Home />
          <About />
          <Skills />
          <Education />
        </div>
      </div>
      <Portfolio />

      <Contact />
      <div className="landing">
        <div className="landing-bg">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
