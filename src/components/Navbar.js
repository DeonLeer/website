import React from "react";

export default function Navbar(props) {

  return (
    <div className="Navbar" id="Navbar">
      <div className="NameAndToggle">
        <button onClick={props.setMode}>{props.notMode} Mode</button>
        <img src={props.image}/>
      </div>
      <div className="NavLinks">
        <table>
          <tr>
            <td onClick={props.aboutMe}>About me</td>
            <td onClick={props.projects}>Projects</td>
            <td onClick={props.resume}>Resume</td>
          </tr>
          <tr>
            <td onClick={props.projects}>Projects</td>
            <td onClick={props.freelanceServices}>Freelance Services</td>
            <td onClick={props.contactMe}>Contact me</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
