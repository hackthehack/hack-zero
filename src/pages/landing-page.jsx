import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../Dashboard";

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Upcoming hackathon</h2>
          <p>
            <b>Theme:</b> Synthwave! 80's Again! <br/>
            <b>Date:</b> Q1 2020
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h2>Your Idea!</h2>
          <p>You haven't selected one yet!</p>
        </Paper>
      </Grid>
    </>
  )
};
