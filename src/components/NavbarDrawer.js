import React from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



export default function NavbarDrawer(props) {

  const [state, setState] = React.useState({
    isOpen: false
  })

  const toggleDrawer = ( isOpen ) => (event) => {
    if (isOpen) {
      setState({ ...state, isOpen: false})
    }
    else {
      setState({ ...state, isOpen: true})
    }
  }

  const list = () => (
    <div className="drawer"
      role="presentation"
      onClick={toggleDrawer(state.isOpen)}
    >
      <List>
        {props.pageArray.map((page, index) => (
          <ListItem button key={index} onClick={page.onClick}>
            <ListItemText primary={page.page} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
        <React.Fragment key="drawer">
          <Button onClick={toggleDrawer(state.isOpen)}>Menu</Button>
          <Drawer anchor="right" open={state.isOpen} onClose={toggleDrawer(state.isOpen)}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  )
}