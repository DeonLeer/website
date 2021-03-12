import React from "react"
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

export default function ContactMe(props) {
  return (
    <div className="ContactMe" id="ContactMe">
      <h1>Contact Me</h1>
      <h2>COMING SOON</h2>
      <div className="ViewMore" onClick={props.viewTop}>
        <footer>Back to top</footer>
        <ArrowDropUpIcon />
      </div>
    </div>
  )
}