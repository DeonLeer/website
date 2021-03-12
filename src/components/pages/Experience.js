import React from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

export default function Experience(props) {
  return (
    <div className="Experience" id="Experience">
      <h1>Experience</h1>
      <h2>NONE YET LMAO</h2>
      <div className="ViewMore" onClick={props.viewMore}>
        <footer>Next</footer>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}
