import React from "react";
import "./App.scss";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navabr/Navbar";

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
