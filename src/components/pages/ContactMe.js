import React from "react"
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

export default function ContactMe(props) {
  return (
    <div className="ContactMe" id="ContactMe">
      <h1>Contact Me</h1>
      <div className="contacts">
        <div className="email">
          <img src="/other_email_icon.png" alt="email"/>
          <h1>Email Me!</h1>
        </div>
        <div className="github">
          <img src={props.logo} alt="github"/>
        </div>
        <div className="twitter">
          <img src="/screenshot_for_website.png" alt="twitter icon"/>
          <h1>Follow Me!</h1>
        </div>

      </div>
      <div className="ViewMore" onClick={props.viewTop}>
        <footer>Back to top</footer>
        <ArrowDropUpIcon />
      </div>
    </div>
  )
}