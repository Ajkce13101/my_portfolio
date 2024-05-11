import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <div className="landing">
        <div className="landing-bg">
          {/* <Navbar /> */}

          <Home />
          {/* <About /> */}
          {/* <Skills /> */}
          {/* <Education /> */}
        </div>
      </div>
      {/* <Portfolio />

      <Contact /> */}
      <div className="landing">
        <div className="landing-bg">{/* <Footer /> */}</div>
      </div>
    </div>
  );
};

export default App;
