import React, { Fragment } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BlogPost from "./layouts/BlogPost"
import NewPostForm from "./layouts/NewPostForm"
import HomePage from './layouts/HomePage'
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
}));

export default function App(props) {

  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="navBar">
            <li className="nav-item active" id="homeButton">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item" id="newPostButton">
              <Link to="/new">New Post</Link>
            </li>
            <li>
              <input type="text" id="search" placeholder="Search"/>
              <button id="searchButton" onClick={searchFunction}>Search</button>
            </li>
          </ul>
        </div>
      </nav>

      <div>
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
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <ul  id="postList">
                <HomePage/>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

function ViewPost(props) {
  const classes = useStyles();

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
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <NewPostForm/>
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

function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("postList");
  li = ul.getElementsByTagName('li');
  console.log(li);

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}