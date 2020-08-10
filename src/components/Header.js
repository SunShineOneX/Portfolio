import React from "react";
import "../styles/styles.css";

function Header() {
  return (
    <div className="container-fluid">
      <header className="header-hero">
        <div id="hero-bg">
          <h1 id="header-hero">JEFFREY ROCKENBACH</h1>
          <h2>FULL STACK ENGINEER</h2>
          <hr className="hr"></hr>
          {/* <img src={require('../assets/images/retro-top.jpg')} className="hero-top" alt=""></img> */}
        </div>
      </header>
      <div className="intro-section">
          <h3>Dynamic engineering, optimized solutions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="projects">
      <div className="projects-bg">
      </div>
      </div>
      <div className="projects-portfolio">
          <h3>PROJECTS PORTFOLIO</h3>
      </div>
      <div className="footer-container">
      <div className="footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.</p>

      </div>
      </div>
    </div>
  );
}

export default Header;
