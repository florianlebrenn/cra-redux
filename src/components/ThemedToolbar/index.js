import React, { useState } from "react";

import { themes } from "../../context/theme-context";

import ThemedToolbar from "./design";

const withThemeSwitcher = Component => props => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return <Component {...props} toggleTheme={toggleTheme} theme={theme} />;
};

export default withThemeSwitcher(ThemedToolbar);
