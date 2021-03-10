import './App.css';
import React, { useState, useRef } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"

import Navbar from "./components/Navbar"
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import FreelanceServices from './components/pages/FreelanceServices';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import ContactMe from './components/pages/ContactMe';


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
    top: (reference.current.offsetTop - (windowHeight * 0.17))
  })};

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
          <AboutMe/>
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
          <FreelanceServices />
        </div>
        <div ref={contactMe}>
          <ContactMe />
        </div>
      </div>
    </ThemeProvider>
  );

};


