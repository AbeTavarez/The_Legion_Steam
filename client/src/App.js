import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

import { registerUser } from "./services/auth";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";

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

  handleSingupSubmit = async (registerData) => {
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
        <Router>
          <Route
            exact
            path="/user/signup"
            render={(props) => (
              <SignUp {...props} handleSignupSubmit={this.handleSignupSubmit} />
            )}
          />

          <Route exact path="/profile" />
        </Router>

        <header className="">
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
