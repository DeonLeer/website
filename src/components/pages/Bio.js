import React from "react"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

export default function Bio(props) {
  return (
    <div id="Bio" className="Bio">
      <div className="BioHeader">
        <h1>About Me</h1>
      </div>
      <div className="BioContent">
        <div className="BioImage">
          <img alt="Me" src="/portfolio1.png" style={{ width: '30vw' }}/>
        </div>
        <div className="BioText">
          <p>
            I'm a web developer that recently graduated from Lighthouse Labs'
            Web Development Bootcamp. My passion for problem solving is what
            drove me to programming and web development. I enjoy building
            products that benifit others and create better user experiences.{" "}
          </p>
          <p>
            This website is my first project post-graduation. I built it using
            JS, React.js, HTML, CSS and material-ui. In the near future I'm
            planning on learning Typescript, Python, and hopefully getting hired
            by you!
          </p>
          <p>
            Outside of programming, I previously played hockey for 18 years, up
            to a junior B level, and I still enjoy watching and playing from
            time to time. Since I stopped playing hockey I've also picked up a
            huge interest in esports. Not only as a fan but also as a player,
            like last year when I competed and placed in the top 100 at an
            international Fortnite tournament in Anaheim, California.
          </p>
        </div>
      </div>
      <div className="ViewMore" onClick={props.viewMore}>
        <footer>Next</footer>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}
