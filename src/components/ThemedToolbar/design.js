import React from "react";

import ThemeContext from "../../context/theme-context";
import ThemedButton from "../ThemedButton";

const Toolbar = ({ changeTheme }) => (
  <ThemedButton onClick={changeTheme}>Changer le thème</ThemedButton>
);

const ThemedToolbar = ({ theme, toggleTheme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar changeTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
};

export default ThemedToolbar;
