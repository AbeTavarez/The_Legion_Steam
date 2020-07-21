import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="copyright">
        <h4>Company</h4>
        <p>
          Copyright<i class="far fa-copyright"></i>
        </p>
        <p>
          The Legion Steam <span>2020</span>
        </p>
        <div className="terms">
          <i class="far fa-handshake"></i>
          <i class="fas fa-user-secret"></i>
        </div>
      </div>

      <div className="socialmedia">
        <h4>Social Media</h4>
        <div className="socialmedia-items">
          <i className="fab fa-facebook-square fa-3x icons"></i>
          <a href="https://www.instagram.com/thelegionsteam/?hl=en">
            <i className="fab fa-instagram fa-3x icons"></i>
          </a>
        </div>
      </div>

      <div className="dev">
        <h4>Development</h4>
        <p>Version 1.0</p>
        <p>Developer:</p>
        <div> www.abrahamtavarez.dev</div>
      </div>
    </div>
  );
}
