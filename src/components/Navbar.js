import React from "react"
import Button from "@material-ui/core/Button"

export default function Navbar(props) {
  const tdStyle =
    props.notMode === "Light"
      ? { backgroundColor: "grey" }
      : { backgroundColor: "white" }
  const buttonStyle =
    props.notMode === "Light"
      ? { color: "white", width: "100%" }
      : { width: "100%" }

  return (
    <div className="Navbar" id="Navbar">
      <div className="NameAndToggle">
        <Button onClick={props.setMode}>{props.notMode} Mode</Button>
        <img src={props.image} alt="logo"/>
      </div>
      <div className="NavLinks">
        <table>
          <tr>
            <td style={tdStyle}>
              <Button onClick={props.aboutMe} style={buttonStyle}>
                About me
              </Button>
            </td>
            <td style={tdStyle}>
              <Button onClick={props.projects} style={buttonStyle}>
                Projects
              </Button>
            </td>
            <td style={tdStyle}>
              <Button onClick={props.resume} style={buttonStyle}>
                Resume
              </Button>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>
              <Button onClick={props.projects} style={buttonStyle}>
                Experience
              </Button>
            </td>
            <td style={tdStyle}>
              <Button onClick={props.freelanceServices} style={buttonStyle}>
                Freelance Services
              </Button>
            </td>
            <td style={tdStyle}>
              <Button onClick={props.contactMe} style={buttonStyle}>
                Contact me
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
