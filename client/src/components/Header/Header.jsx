import React from "react";

import "./Header.css";
import car_img from "../../assets/images/car_img.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-bar">
          <Link className="s-link">Home</Link>
          <Link className="s-link">About</Link>
          <Link className="s-link">Contact</Link>
        </ul>
      </nav>
      <div className="img-container">
        <img />
      </div>

      <div className="logo">
        <div>The Legion Steam</div>
      </div>
    </div>
  );
}
