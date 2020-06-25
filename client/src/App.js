import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App-header">
      <header className="">
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
