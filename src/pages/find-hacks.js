import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../Dashboard";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'


export const FindHacks = () => {
    const classes = useStyles();

    return (
        <>
            <h1>Hack Ideas</h1>

            <Grid item xs={12}>

                <Link to={'/hack'}>
                    <Button color="primary">
                        Create Hack
                    </Button>
                </Link>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Hack Day App</h2>
                    <p>Create & View Hacks</p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Real Time P&V Test Monitoring</h2>
                    <p>Ability to see real time P&V test results while a JMeter test is running (in non GUI mode)</p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>CodeAcademy</h2>
                    <p>Code Academy is a new Customer Labs program to provide guided pathways and opportunities for people looking to learn technology skills such as software engineering, data science and DevOps.</p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Get Sh#t Done!</h2>
                    <p>Are you sick of swimming in ambiguity? Are you keen to build a community? Do you want to hack something the likes of Google and Atlassian?<br />
                        Well, the Customer Labs Playbook wants you to help clarify our ways of working!<br />
                        We are seeking to unify and improve the way we do things by building our Customer Labs Playbook microsite. </p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Crack an egg</h2>
                    <p>Inspired by a robot that can crack an egg, have you ever wondered how robotic technology works? How does robotic arms move? Let's explore how code can translate to something moving that is not on a screen. </p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Country Road</h2>
                    <p>An HR model that supports  teams being co-located in regional Australia</p>
                </Paper>
            </Grid>
        </>
    )


}