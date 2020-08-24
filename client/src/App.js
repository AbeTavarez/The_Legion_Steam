import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import {
  registerUser,
  loginUser,
  removeToken,
  verifyUser,
} from "./services/auth";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/Signin";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.handleVerify();
  }

  //* AUTH
  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleSignupSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });

    localStorage.clear();
    removeToken();
    this.renderRedirect();
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="App-header">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route
            exact
            path="/user/signup"
            render={(props) => (
              <SignUp {...props} handleSignupSubmit={this.handleSignupSubmit} />
            )}
          />
          <Route
            exact
            path="/user/signin"
            render={(props) => (
              <SignIn {...props} handleLoginSubmit={this.handleLoginSubmit} />
            )}
          />
          <Route exact path="/user/profile" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
