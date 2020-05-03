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
<<<<<<< HEAD
            <li>
=======
            <li className="nav-item">
>>>>>>> parent of fa21ac4... Add searchbar
              <Link to="/new">New Post</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/new">
            <New />
          </Route>
          <Route exact path="/:postId(\d+)" component={ ViewPost } />
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/edit'>
            <Edit />
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
<<<<<<< HEAD
              <BlogPost postId={1} />
=======
              <HomePage />
>>>>>>> parent of fa21ac4... Add searchbar
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

function ViewPost(props) {
  const classes = useStyles()

  let postId = props.match.params.postId;
  postId++;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <BlogPost postId={ postId } />
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

function Edit() {
  const classes = useStyles();

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