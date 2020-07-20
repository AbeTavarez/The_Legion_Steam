import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./SignUp.css";
export default class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleSignupSubmit, histoy } = this.props;
    return (
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignupSubmit(this.state);
          // history.push("/");
          this.setState({
            username: "",
            email: "",
            password: "",
          });
        }}
      >
        <h3>Register</h3>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className="submit-btn">Submit</button>
      </form>
    );
  }
}
