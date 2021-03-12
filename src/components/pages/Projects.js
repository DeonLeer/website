import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import axios from 'axios'
import stringConverter from '../../helper-functions/string-converter'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

export default function Projects(props) {

  const [loading, setLoading] = useState(true)

  const [readMe, setReadMe] = useState({
    nbaDashboard: [],
    website: [],
    buySellApp: [],
    scheduler: [],
    tweeter: [],
    jungle: []
  })

  const [overview, setOverview] = useState({
    nbaDashboard: [],
    website: [],
    buySellApp: [],
    scheduler: [],
    tweeter: [],
    jungle: []
  })

  const [display, setDisplay] = useState({
    nbaDashboard: ("none"),
    website: ("none"),
    buySellApp: ("none"),
    scheduler: ("none"),
    tweeter: ("none"),
    jungle: ("none")
  })

  useEffect(() => {
    const url0 = axios.get(`https://raw.githubusercontent.com/DeonLeer/NBA-Dashboard/master/README.md`)
    const url1 = axios.get(`https://raw.githubusercontent.com/DeonLeer/website/master/README.md`)
    const url2 = axios.get(`https://raw.githubusercontent.com/DeonLeer/buy-sell-app/master/README.md`)
    const url3 = axios.get(`https://raw.githubusercontent.com/DeonLeer/scheduler/master/README.md`)
    const url4 = axios.get(`https://raw.githubusercontent.com/DeonLeer/tweeter/master/README.md`)
    const url5 = axios.get(`https://raw.githubusercontent.com/DeonLeer/jungle/master/README.md`)
    const url6 = axios.get(`https://api.github.com/repos/deonleer/nba-dashboard`)
    const url7= axios.get(`https://api.github.com/repos/deonleer/website`)
    const url8 = axios.get(`https://api.github.com/repos/deonleer/buy-sell-app`)
    const url9 = axios.get(`https://api.github.com/repos/deonleer/scheduler`)
    const url10 = axios.get(`https://api.github.com/repos/deonleer/tweeter`)
    const url11 = axios.get(`https://api.github.com/repos/deonleer/jungle`)

    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3),
      Promise.resolve(url4),
      Promise.resolve(url5),
      Promise.resolve(url6),
      Promise.resolve(url7),
      Promise.resolve(url8),
      Promise.resolve(url9),
      Promise.resolve(url10),
      Promise.resolve(url11)
    ])
      .then((all) => {
        setReadMe(prev => ({
          ...prev,
          nbaDashboard: all[0].data,
          website: all[1].data,
          buySellApp: all[2].data,
          scheduler: all[3].data,
          tweeter: all[4].data,
          jungle: all[5].data
        }))
        setOverview(prev => ({
          ...prev,
          nbaDashboard: all[6].data,
          website: all[7].data,
          buySellApp: all[8].data,
          scheduler: all[9].data,
          tweeter: all[10].data,
          jungle: all[11].data
        }))
        setLoading(false)
      })
  }, [])

  const toggleDisplay = (project) => {
    console.log('toggling', project)
    if(display[project.project] === ("none")) {
      console.log('display=nun')
      setDisplay(prev => ({
        ...prev,
        [project.project]: ("block")
      }))
    } else {
      console.log('other')
      setDisplay(prev => ({
        ...prev,
        [project.project]: ("none")
      }))
    }
  }

  if (loading) return (null)

  const projectStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '25vh',
    width: '30vw',
    border: 'solid',
    background: 'grey'

  }

  return (
      <div className="Projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div>
          <p>Here are 6 of my recent projects that I'm most proud of. I've included all github links as well as a toggling render of each ReadMe file.</p>
        </div>
        <div className="ProjectsList">
            {Object.keys(overview).map((project) => (
              <div style={projectStyle}>
                <h2 style={{margin: '5px'}}>{stringConverter(project)}</h2>
                <a href={overview[project].html_url}>Github Link</a>
                <p>{overview[project].description}</p>
                <button style={{width: '20%'}} onClick={() => toggleDisplay({project})}>{(display[project] === 'none') ? 'View ReadME' : 'Close ReadMe'}</button>
                <div style={{ display: display[project]}}>
                  <ReactMarkdown source={readMe[project]} />
                </div>
              </div>
            ))}
        </div>
        <div className="ViewMore" onClick={props.viewMore}>
          <footer>Next</footer>
          <ArrowDropDownIcon />
        </div>
      </div>

  )
}
