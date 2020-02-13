import React from "react";

import Home from "../../pages/Home";
import ThemedToolbar from "../ThemedToolbar";
import ThemedButton from "../ThemedButton";
import "./App.css";

const Header = () => (
  <header className="App-header">
    <ThemedToolbar />
  </header>
);

const App = () => (
  <div className="App">
    <Header />
    <section>
      <ThemedButton>Another button</ThemedButton>
      <Home />
    </section>
  </div>
);

export default App;
