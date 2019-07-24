import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#000000',
  },
  dark: {
    foreground: '#ffffff',
    background: '#cccccc',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
