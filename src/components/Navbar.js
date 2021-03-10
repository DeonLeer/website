import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// creating styles for classes
const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className="Navbar">
      <div className="NameAndToggle">
        <button onClick={props.setMode}>{props.notMode} Mode</button>
        <h1>Deon Leer</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>About Me</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Projects</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Resume</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>Experience</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Freelance Services</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Contact Me</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};