import React, { useState } from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

export default function Resume(props) {
  const [visibility, setVisibility] = useState("none")

  const toggleOpen = () => {
    visibility === "none" ? setVisibility("block") : setVisibility("none")
  }

  return (
    <div className="Resume" id="Resume">
      <div>
        <h1>Resume</h1>
        <p>Here is a <a href={'https://resume.creddle.io/embed/g7zosne5aml'}>link</a> to my resume. Or, alternatively, it can be viewed below. </p>
        <button onClick={toggleOpen}>{(visibility === 'none') ? 'View Resume' : 'Close Resume' }</button>
      </div>
      <div>
        <iframe
          title="resume"
          style={{ display: visibility }}
          src="https://resume.creddle.io/embed/g7zosne5aml"
          width="850"
          height="1100"
        ></iframe>
      </div>
      <div className="ViewMore" onClick={props.viewMore}>
          <footer>Next</footer>
          <ArrowDropDownIcon />
        </div>
    </div>
  )
}
