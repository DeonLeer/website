import React, { useState } from "react"
import emailjs from 'emailjs-com'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ExternalLink from '../ExternalLink'

export default function ContactMe(props) {

  const [visibility, setVisibility] = useState('none')

  const toggleVisibility = () => (visibility === 'none') ? setVisibility('block') : setVisibility('none')


  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_k1be1wx', 'template_sd8ylha', e.target, 'user_VixIV8GqWrUATSnlI7imT')
      .then((result) => {
          document.getElementById("contact-form").reset()
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }


  return (
    <div className="ContactMe" id="ContactMe">
      <h1>Contact Me</h1>
      <div className="contacts">
        <div className="email" onClick={toggleVisibility}>
          <img src="/other_email_icon.png" alt="email"/>
          <h1>Email Me!</h1>
        </div>
        <div className="emailForm" style={{display: visibility}}>
          <form id="contact-form" className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name"/>
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="github">
          <ExternalLink href="http://github.com/deonleer">
            <img src={props.logo} alt="github"/>
          </ExternalLink>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/deon-leer-b2089916b/" target="_blank" rel="noreferrer">
            <img src='/logo5.png' alt="linkedin"/>
          </a>
        </div>
        <div className="twitter">
          <a href="https://www.twitter.com/leerdevs" target="_blank" rel="noreferrer" style={{color: '#1DA1F2', textDecoration: 'none'}}>
            <img src="/screenshot_for_website.png" alt="twitter icon"/>
            <h1>Follow Me!</h1>
          </a>
        </div>
      </div>
      <div className="ViewMore" onClick={props.viewTop}>
        <footer>Back to top</footer>
        <ArrowDropUpIcon />
      </div>
    </div>
  )
}