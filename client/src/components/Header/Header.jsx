import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-bar">
          <NavLink to="/" className="s-link">
            Home
          </NavLink>
          <a href="/#about-section" className="s-link">
            About
          </a>
          <a href="/#contact-section" className="s-link">
            Contact
          </a>
          <NavLink to="/user/signup" className="s-link">
            Sign Up
          </NavLink>
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
