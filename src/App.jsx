import React from "react";
import "./App.scss";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navabr/Navbar.jsx";

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
