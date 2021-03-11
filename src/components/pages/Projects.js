import React from "react"

export default function Projects(props) {

  const nbastring = props.projects.nbaDashboard.content

  console.log(nbastring)

  let atobnbastring = atob(nbastring)

  console.log(atobnbastring)

  let splitstring = atobnbastring.split("!")

  console.log(splitstring)


  return (

    <div className="Projects" id="Projects">
      <h1>Projects</h1>
      <p></p>
    </div>
  )
}
