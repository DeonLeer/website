import './App.css';
import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Navbar from "./components/Navbar"

export default function App() {
  const [theme, setTheme] = useState('light');
  const [notTheme, setNotTheme] = useState('Dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    notTheme === 'Dark' ? setNotTheme('Light') : setNotTheme('Dark')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyle/>
        <div className="App">
          <div className="Header">
            <div className="NameAndToggle">
              <button onClick={themeToggler}>{notTheme} Mode</button>
              <h1>Deon Leer</h1>
            </div>
            <Navbar />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};


