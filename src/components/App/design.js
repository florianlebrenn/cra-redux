import React from "react";

import Home from "../../pages/Home";
import logo from "./logo.svg";
import "./App.css";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

const App = () => (
  <div className="App">
    <Header />
    <section>
      <Home />
    </section>
  </div>
);

export default App;
