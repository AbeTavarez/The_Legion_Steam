import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="mission-container">
          <div className="mission">Our Mission</div>
          <p>Giving our clients excellent service anywhere at anytime.</p>
        </div>
        <div></div>
      </div>
    );
  }
}
