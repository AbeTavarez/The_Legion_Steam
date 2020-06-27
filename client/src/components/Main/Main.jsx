import React, { Component } from "react";

import parking_img from "../../assets/images/parking.jpg";
import washer from "../../assets/images/washer.jpg";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="ourstory">
          <div className="ourstory-img">
            <img src={parking_img} alt="store-front" />
          </div>
          <div className="story">
            <h4>Our Story</h4>
            <p>
              We got tired of going to car washers and not being satisfied in
              the way our cars returned, so we started to pay attention to the
              price, the waiting line, the time it takes to wash and still we
              have to do some final touch ups to makeit look how we want it to
              look.
            </p>
            <p>
              So we decided that there will be no more waiting line, no more
              high prices. no more wasting time or unproffesional treatment to
              out cars.
            </p>
          </div>
        </div>

        <hr />
        {/* MISSION SECTION|||||||||||||||||||||||||||||||||||||| */}
        <div className="mission-session">
          <div className="mission">
            <div className="rev">
              <h4>Our Mission</h4>
              <p>
                At The Legion Steam we focused 100% on customer satisfaction
              </p>
              <p>
                That's the reason we train over and over again to make sure we
                get it right and that your expectations are meet.
              </p>
            </div>
          </div>
          <div className="washer-img">
            <img src={washer} alt="carwash-worker" />
          </div>
        </div>
        <hr />
        <div className="contact-session">
          <h4>Contact Us</h4>
          <p>
            Dalni R. <span>(917) 733 - 3013</span>
          </p>
          <p>Reserve Today!</p>
          <h5>For Contracts</h5>
          <p>Email: legionsteam@gmail.com</p>
        </div>
      </div>
    );
  }
}
