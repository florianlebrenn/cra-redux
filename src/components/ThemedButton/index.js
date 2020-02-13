import React, { useContext } from "react";
import ThemeContext from "../../context/theme-context";

const ThemedButton = props => {
  const theme = useContext(ThemeContext);
  return (
    <button
      {...props}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    />
  );
};

export default ThemedButton;
