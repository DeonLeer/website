import './App.css';
import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import Navbar from "./components/Navbar"
import About_Me from './components/pages/About_Me';
import Experience from './components/pages/Experience';
import Freelance_Services from './components/pages/Freelance_Services';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact_Me from './components/pages/Contact_Me';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [notTheme, setNotTheme] = useState('Dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    notTheme === 'Dark' ? setNotTheme('Light') : setNotTheme('Dark')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <div className="App">
        <Navbar 
          setMode={themeToggler}
          notMode={notTheme}/>

        <About_Me />

        <Projects />

        <Resume />

        <Experience />

        <Freelance_Services />

        <Contact_Me />
      </div>
    </ThemeProvider>
  );
};


