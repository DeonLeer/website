import React from 'react'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

export default function FreelanceServices(props) {
  return (
    <div className="FreelanceServices" id="FreelanceServices">
      <h1>Freelance Services</h1>
      <h2>COMING SOON</h2>
      <div className="ViewMore" onClick={props.viewMore}>
        <footer>Next</footer>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}