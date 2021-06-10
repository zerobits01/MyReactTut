import React from 'react';
import { createContext } from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
};
  
// export const ThemeContext = React.createContext(
//     themes.dark // default value
// );

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });

/*

Updating Context from a Nested Component
It is often necessary to update the context from a component that is nested somewhere deeply in the component tree. 
In this case you can pass a function down through the context to allow consumers to update the context:


*/