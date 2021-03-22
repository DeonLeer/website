import "./App.css"
import React, { useState, useRef } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./components/GlobalStyle"
import { lightTheme, darkTheme } from "./components/Themes"

import Navbar from "./components/Navbar"
import NavbarMobile from "./components/NavbarMobile"
import AboutMe from "./components/pages/AboutMe"
// import Experience from "./components/pages/Experience"
// import FreelanceServices from "./components/pages/FreelanceServices"
import Projects from "./components/pages/Projects"
import Resume from "./components/pages/Resume"
import ContactMe from "./components/pages/ContactMe"
import Bio from "./components/pages/Bio"

// styling-techniques: pick one pattern -> regular .css, scss <- use scss

export default function App() {

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

  const deviceWidth = window.innerWidth
  console.log(deviceWidth)

  const scroll = (reference) => {
    const windowHeight = window.innerHeight

    window.scrollTo({
      behavior: "smooth",
      // Checking reference.current isn't falsy before grabbing .offsetTop
      top: reference.current
        ? reference.current.offsetTop - windowHeight * 0.12
        : undefined,
    })
  }

  const whiteLogo = "/logo_white.png"
  const blackLogo = "/logo_black.png"
  const gitLogoDark = "/github_logo_dark.png"
  const gitLogoLight = "/github_long_icon.png"

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
          <NavbarMobile
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
          theme={theme}
          viewMore={() => scroll(resume)}
          />
        </div>
        <div ref={resume}>
          <Resume
          viewMore={() => scroll(contactMe)}
          />
        </div>
        <div ref={contactMe}>
          <ContactMe
          viewTop={() => scroll(aboutMe)}
          logo={theme === "light" ? gitLogoLight : gitLogoDark}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
