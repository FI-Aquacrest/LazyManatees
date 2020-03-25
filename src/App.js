import React, { Component, Fragment } from "react"
import BlogPost from "./layouts/BlogPost"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <BlogPost />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}