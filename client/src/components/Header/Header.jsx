import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-bar">
          <a href="#home-section" className="s-link">
            Home
          </a>
          <a href="/#about-section" className="s-link">
            About
          </a>
          <a href="/#contact-section" className="s-link">
            Contact
          </a>
        </ul>
      </nav>
      <div className="img-container">
        <img />
      </div>

      <div className="logo">
        <div className="logo-name">The Legion Steam</div>
      </div>
      <div className="service">
        <h2>Professional Steam Cleaning with Superior Results.</h2>
      </div>
    </div>
  );
}
