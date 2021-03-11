import React, { useState } from "react";
import Button from '@material-ui/core/Button';
export default function Resume() {

  const [visibility, setVisibility] = useState('none')



  const toggleOpen = () => {
    visibility === 'none'? setVisibility('block') : setVisibility('none')
  }



  return (
    <div className="Resume" id="Resume">
      <h1>Resume</h1>
      <Button onClick={toggleOpen}>booton</Button>
      <div >
        <iframe style={{display: visibility}} src="https://resume.creddle.io/embed/g7zosne5aml"
  width="850" height="1100"></iframe>
      </div>
      
    </div>
  )
}