import React, { Fragment } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BlogPost from "./layouts/BlogPost"
import NewPostForm from "./layouts/NewPostForm"
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

export default function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Post</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <BlogPost postId={1} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

function New() {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <NewPostForm />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}