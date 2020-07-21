import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

export default class Signin extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginSubmit(this.state);
          history.push("/");
          this.setState({
            username: "",
            password: "",
          });
        }}
      >
        <h3>Login</h3>
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
        <button type="submit" className="login-submit-btn">
          Submit
        </button>

        <p>
          Not register ?{" "}
          <span>
            {" "}
            <Link to="/user/signup">Register Here</Link>
          </span>
        </p>
      </form>
    );
  }
}
