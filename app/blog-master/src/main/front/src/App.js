import React, {useState} from "react"
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BlogPost from "./layouts/BlogPost"
import NewPostForm from "./layouts/NewPostForm"
import RandomPosts from './layouts/RandomPosts'
import PostList from './layouts/PostList'
import LoginComponent from './layouts/LoginComponent'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import AuthenticationService from './service/AuthenticationService';
import History from './History';
import LogoutComponent from "./layouts/LogoutComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary
  }
}));

/**
 * Core web page. Contains everything between the title and the footer.
 */
const App = () => {
  const classes = useStyles();

  /**
   * Sets up a useState for log-in status. Updates when logging in or out.
   */
  const [adminLoggedIn, setAdminLoggedIn] = useState(AuthenticationService.isUserLoggedIn);

  /**
   * Sets up a useState for the side-bar list containing all posts. Updates when editing or adding a post.
   */
  const [postList, setPostList] = useState(document.getElementById("postList"));

  /**
   * Updates the UI when user logs in.
   */
  const loggedIn = () => {
    setAdminLoggedIn(AuthenticationService.isUserLoggedIn());
  };

  /**
   * Updates the UI when user logs out.
   */
  const loggedOut = () => {
    AuthenticationService.logout();
    setAdminLoggedIn(AuthenticationService.isUserLoggedIn());
  };

  /**
   * Updates the UI when editing or adding a post.
   */
  const refreshPostList = () => {
    setPostList(document.getElementById("postList"));
  };

  /**
   * Returns a LoginComponent. Used with routing.
   */
  function Login() {
    return <LoginComponent changeLogin={loggedIn} />;
  }

  /**
   * Returns a LogoutComponent. Used with routing.
   */
  function Logout() {
    return <LogoutComponent />;
  }

  /**
   * Returns a list with random posts as the home page. Used with routing.
   */
  function Home() {
    return (
      <ul>
        <h2>Welcome!</h2>
        <h4><br/>Posts you might like</h4>
        <RandomPosts />
      </ul>
    )
  }

  /**
   * Places a SideBar to the right side of the page. This is always active.
   */
  function SideBar() {
    return (
        <ul id="postList">
          <h4><br/>All Posts</h4>
          <PostList />
        </ul>
    )
  }

  /**
   * Returns a LoginComponent. Used with routing.
   */
  function ViewPost(props) {
    let postId = props.match.params.postId;

    return <BlogPost postId={ postId } refreshPostList={refreshPostList} />;
  }

  /**
   * Returns a LoginComponent. Used with routing.
   */
  function New() {
    return <NewPostForm refreshPostList={refreshPostList} />;
  }

  /**
   * Search function used by the searchbar
   *
   * Makes every object invisible except the ones which are filtered.
   */
  function searchFunction() {
    let input, filter, ul, li, a, i, txtValue;
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

  return (
      <Router history={History} style={{height: '100%'}}>

        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <p/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="navBar">
              <li className="nav-item active" id="homeButton">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item" id="newPostButton" hidden={!adminLoggedIn}>
                <Link to="/new">New Post</Link>
              </li>
              {!adminLoggedIn &&
                <li className="nav-item" id="newPostButton">
                  <Link to="/login">Login</Link>
                </li>
              }
              {adminLoggedIn &&
                <li className="nav-item" id="newPostButton">
                  <Link to="/logout" onClick={loggedOut}>Logout</Link>
                </li>
              }
            </ul>
          </div>
        </nav>

        <Grid container className={classes.root}>
          <Grid item xs={12} md={9}>
            <Paper className={classes.paper} variant='outlined' square>
              <Switch>
                <Route path="/new">
                  <New/>
                </Route>
                <Route exact path="/:postId(\d+)" component={ViewPost}/>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/logout' exact component={Logout}/>
              </Switch>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className={classes.paper} variant='outlined' square>
              <Container className={classes.sideBar}>
                {/*<input type="text" id="search" placeholder="Search"/>*/}
                {/*<button id="searchButton" onClick={searchFunction}>Search</button>*/}
                <TextField id="search" label="Search" variant="outlined" style={{width: '85%'}}/>
                <IconButton id="searchButton" aria-label="search" onClick={searchFunction}>
                  <SearchIcon/>
                </IconButton>
                <SideBar/>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Router>
  )
};

export default App;