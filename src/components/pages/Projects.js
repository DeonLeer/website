import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import axios from "axios"
import stringConverter from "../../helper-functions/string-converter"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import {
  Button,
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  Link,
} from "@material-ui/core"
// import theGoat from "../../image0.png"
// console.log(theGoat)

export default function Projects(props) {
  const projectImages = [
    'https://raw.githubusercontent.com/celsinga/nba-dashboard/master/react-front-end/public/Screenshots/Screen%20Shot%202021-03-01%20at%202.28.31%20PM.png',
    '/git_photos/websitesc.png',
    'https://raw.githubusercontent.com/celsinga/buy-sell-app/master/public/Screenshots/search.png',
    'https://raw.githubusercontent.com/DeonLeer/scheduler/master/docs/initial.png',
    'https://raw.githubusercontent.com/DeonLeer/tweeter/master/docs/desktop.png',
    'https://raw.githubusercontent.com/DeonLeer/jungle/master/public/homepage.png'
  ]

  const [loading, setLoading] = useState(true)

  const [readMe, setReadMe] = useState({
    nbaDashboard: [],
    website: [],
    buySellApp: [],
    scheduler: [],
    tweeter: [],
    jungle: [],
  })

  const [overview, setOverview] = useState({
    nbaDashboard: [],
    website: [],
    buySellApp: [],
    scheduler: [],
    tweeter: [],
    jungle: [],
  })

  const [display, setDisplay] = useState({
    nbaDashboard: "none",
    website: "none",
    buySellApp: "none",
    scheduler: "none",
    tweeter: "none",
    jungle: "none",
  })

  useEffect(() => {
    const url0 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/NBA-Dashboard/master/README.md`
    )
    const url1 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/website/master/README.md`
    )
    const url2 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/buy-sell-app/master/README.md`
    )
    const url3 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/scheduler/master/README.md`
    )
    const url4 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/tweeter/master/README.md`
    )
    const url5 = axios.get(
      `https://raw.githubusercontent.com/DeonLeer/jungle/master/README.md`
    )
    const url6 = axios.get(
      `https://api.github.com/repos/deonleer/nba-dashboard`
    )
    const url7 = axios.get(`https://api.github.com/repos/deonleer/website`)
    const url8 = axios.get(
      `https://api.github.com/repos/deonleer/buy-sell-app`
    )
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
      Promise.resolve(url11),
    ]).then((all) => {
      setReadMe((prev) => ({
        ...prev,
        nbaDashboard: all[0].data,
        website: all[1].data,
        buySellApp: all[2].data,
        scheduler: all[3].data,
        tweeter: all[4].data,
        jungle: all[5].data,
      }))
      setOverview((prev) => ({
        ...prev,
        nbaDashboard: all[6].data,
        website: all[7].data,
        buySellApp: all[8].data,
        scheduler: all[9].data,
        tweeter: all[10].data,
        jungle: all[11].data,
      }))
      setLoading(false)
    })
  }, [])

  console.log(overview.jungle)

  const toggleDisplay = (project) => {
    console.log("toggling", project)
    if (display[project.project] === "none") {
      console.log("display=nun")
      setDisplay((prev) => ({
        ...prev,
        [project.project]: "block",
      }))
    } else {
      console.log("other")
      setDisplay((prev) => ({
        ...prev,
        [project.project]: "none",
      }))
    }
  }

  if (loading) return null

  const projectStyle = 
    props.theme === "light" ? 
    {
      width: "30vw",
      height: "100%",
    }
    :
    {
      width: "30vw",
      height: "100%",
      backgroundColor: 'black',
      color: 'white'
    }

  return (
    <div className="Projects">
      <div>
        <h1 style={{ marginBottom: '2px', marginTop: '3.5px'}}>Projects</h1>
      </div>
      <div>
        <p>
          Here are 6 of my recent projects that I'm most proud of. I've included
          all github links as well as a toggling render of each ReadMe file.
        </p>
      </div>

      <Grid
        container
        justify="center"
        spacing={3}
        //xs={} TODO: set how many grid items at each breakpoint
        //sm={}
        //md={}
      >
        {Object.keys(overview).map((project, index) => (
          <Grid item>
            <Card raised style={projectStyle}>
              <CardActionArea>
                <CardMedia style={{height: 120}} title={project} image={projectImages[index]}/>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
                    {stringConverter(project)}
                  </Typography>

                  {/* <h2 style={{ margin: "5px" }}>{stringConverter(project)}</h2> */}
                  <Typography
                    variant="body2"
                    color="inherit"
                    component="p"
                  >
                    {overview[project].description}
                  </Typography>

                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={overview[project].svn_url} >
                        GITHUB LINK
                      </Link>

                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => toggleDisplay({ project })}
                    >
                      {display[project] === "none"
                        ? "View ReadME"
                        : "Close ReadMe"}
                    </Button>
                  </CardActions>

                  {/* <a
                  href={overview[project].html_url}
                  target="_blank"
                  rel="noreferrer"
                  >
                  Github Link
                </a> */}
                  {/* <p>{overview[project].description}</p> */}
                  {/* <Button
                  style={{ width: "20%" }}
                  onClick={() => toggleDisplay({ project })}
                  >
                  {display[project] === "none" ? "View ReadME" : "Close ReadMe"}
                </Button> */}

                  {/* TODO: Modal to open and serve up readme
                 Modal props: source (markdown source), isOpen
                 you'll need to store whether or not the Modal is open
                 and just differ the readme source for each 
                */}
                  <div style={{ display: display[project] }}>
                    <ReactMarkdown source={readMe[project]} />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className="ViewMore" onClick={props.viewMore}>
        <footer>Next</footer>
        <ArrowDropDownIcon />
      </div>
    </div>
  )
}
