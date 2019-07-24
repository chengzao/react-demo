import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#ea2929',
  },
  dark: {
    foreground: '#ffffff',
    background: '#2dda32',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});
