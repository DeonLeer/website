import './App.css';
import React, { useState, useRef, useEffect } from "react";
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

  const aboutMe = useRef(null)
  const experience = useRef(null)
  const freelanceServices = useRef(null)
  const projects = useRef(null)
  const resume = useRef(null)
  const contactMe = useRef(null)

  const scroll = (reference) => {
    let windowHeight = window.innerHeight
    window.scrollTo({
    behavior: "smooth",
    top: (reference.current.offsetTop - (windowHeight * 0.16))
  })};


  console.log(aboutMe)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <div className="App">
        <div className="NavbarPosition" style={theme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#363537' }}>
          <Navbar 
            
            setMode={themeToggler}
            notMode={notTheme}
            aboutMe={() => scroll(aboutMe)}
            projects={() => scroll(projects)}
            resume={() => scroll(resume)}
            experience={() => scroll(experience)}
            freelanceServices={() => scroll(freelanceServices)}
            contactMe={() => scroll(contactMe)}
            />
        </div>
        <div ref={aboutMe}>
          <About_Me/>
        </div>
        <div ref={projects}>
          <Projects />
        </div>
        <div ref={resume}>
          <Resume />
        </div>
        <div ref={experience}>
          <Experience />
        </div>
        <div ref={freelanceServices}>
          <Freelance_Services />
        </div>
        <div ref={contactMe}>
          <Contact_Me />
        </div>
      </div>
    </ThemeProvider>
  );

};


