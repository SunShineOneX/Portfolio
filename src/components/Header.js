import React from 'react';
import "../styles/styles.css"

function Header() {
    return (
        <div className="wrapper">
        <div class="container-fluid" id="hero-top">
            <h1 className="header-first-name">JEFFREY</h1>
            <h1 className="header-last-name">ROCKENBACH</h1>
            {/* <img src={require('../assets/images/retro-top.jpg')} className="hero-top" alt=""></img> */}
        </div>
        </div>
    )
}

export default Header;
