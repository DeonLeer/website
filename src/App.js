import "./App.css"
import React, { useState, useRef, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/GlobalStyle"
import { lightTheme, darkTheme } from "./components/Themes"
import axios from 'axios'

import Navbar from "./components/Navbar"
import AboutMe from "./components/pages/AboutMe"
import Experience from "./components/pages/Experience"
import FreelanceServices from "./components/pages/FreelanceServices"
import Projects from "./components/pages/Projects"
import Resume from "./components/pages/Resume"
import ContactMe from "./components/pages/ContactMe"
import Bio from "./components/pages/Bio"

// styling-techniques: pick one pattern -> regular .css, scss <- use scss

export default function App() {

  const [state, setState] = useState({
    nbaDashboard: [],
    website: [],
    buySellApp: [],
    scheduler: [],
    tweeter: [],
    jungle: []
  })


  useEffect(() => {
    const url0 = axios.get(`https://api.github.com/repos/DeonLeer/nba-dashboard/readme`)
    const url1 = axios.get(`https://api.github.com/repos/DeonLeer/website/readme`)
    const url2 = axios.get(`https://api.github.com/repos/DeonLeer/buy-sell-app/readme`)
    const url3 = axios.get(`https://api.github.com/repos/DeonLeer/scheduler/readme`)
    const url4 = axios.get(`https://api.github.com/repos/DeonLeer/tweeter/readme`)
    const url5 = axios.get(`https://api.github.com/repos/DeonLeer/jungle/readme`)

    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3),
      Promise.resolve(url4),
      Promise.resolve(url5),
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          nbaDashboard: all[0].data,
          website: all[1].data,
          buySellApp: all[2].data,
          scheduler: all[3].data,
          tweeter: all[4].data,
          jungle: all[5].data
        }))
      })
  }, [])
 

  const [theme, setTheme] = useState("light")
  const [notTheme, setNotTheme] = useState("Dark")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    notTheme === "Dark" ? setNotTheme("Light") : setNotTheme("Dark")
  }

  const aboutMe = useRef(null)
  const experience = useRef(null)
  const freelanceServices = useRef(null)
  const projects = useRef(null)
  const resume = useRef(null)
  const contactMe = useRef(null)
  const bio = useRef(null)

  const scroll = (reference) => {
    const windowHeight = window.innerHeight

    window.scrollTo({
      behavior: "smooth",
      // Checking reference.current isn't falsy before grabbing .offsetTop
      top: reference.current
        ? reference.current.offsetTop - windowHeight * 0.17
        : undefined,
    })
  }

  const whiteLogo = "/logo_white.png"
  const blackLogo = "/logo_black.png"

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <div
          className="NavbarPosition"
          style={
            theme === "light"
              ? { backgroundColor: "white" }
              : { backgroundColor: "#363537" }
          }
        >
          <Navbar
            image={theme === "light" ? blackLogo : whiteLogo}
            setMode={themeToggler}
            notMode={notTheme}
            aboutMe={() => scroll(bio)}
            projects={() => scroll(projects)}
            resume={() => scroll(resume)}
            experience={() => scroll(experience)}
            freelanceServices={() => scroll(freelanceServices)}
            contactMe={() => scroll(contactMe)}
          />
        </div>
        <div ref={aboutMe}>
          <AboutMe onClickViewMore={() => scroll(bio)} />
        </div>
        <div ref={bio}>
          <Bio viewMore={() => scroll(projects)} />
        </div>
        <div ref={projects}>
          <Projects
          projects={state}
          // viewMore={() => scroll(resume)}
          />
        </div>
        <div ref={resume}>
          <Resume
          // viewMore={() => scroll(experience)}
          />
        </div>
        <div ref={experience}>
          <Experience
          // viewMore={() => scroll(freelanceServices)}
          />
        </div>
        <div ref={freelanceServices}>
          <FreelanceServices
          // viewMore={() => scroll(contactMe)}
          />
        </div>
        <div ref={contactMe}>
          <ContactMe
          // viewTop={() => scroll(aboutMe)}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
