import React from "react";
import "../styles/styles.css";

function Header() {
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="container-fluid" id="hero-bg">
          <h1 className="header-first-name">JEFFREY ROCKENBACH</h1>
          <h2>FULL STACK ENGINEER</h2>
          {/* <img src={require('../assets/images/retro-top.jpg')} className="hero-top" alt=""></img> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
