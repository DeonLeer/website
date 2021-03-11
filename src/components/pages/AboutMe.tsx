import React from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import "./AboutMe.scss"

interface Props {
  onClickViewMore: () => void
}

export default function AboutMe({ onClickViewMore }: Props) {
  return (
    <div className="AboutMe">
      <div className="AboutMeContent">
        <div className="text1">
          <h1>Hi, My Name is Deon Leer</h1>
          <h2>I'm a Full Stack JavaScript Developer,</h2>
          <h2>and This is my Portfolio Site</h2>
        </div>
        <div className="image1">
          <img src="/portfolio2.png" />
        </div>
      </div>
      <div className="ViewMore" onClick={onClickViewMore}>
        <footer>View More</footer>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}
