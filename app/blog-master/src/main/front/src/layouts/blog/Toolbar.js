import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/EditRounded';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownIcon from '@material-ui/icons/ThumbDownAltRounded';
import AuthenticationService from '../../service/AuthenticationService';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginLeft: "15px",
    marginRight: "15px",
  },
}));

/**
 * If admin is logged in, displays buttons for editing and deleting posts. Otherwise does nothing.
 */
export default function Toolbar(props) {
  const classes = useStyles();

  let adminLoggedIn = AuthenticationService.isUserLoggedIn();

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        {/*<Grid item>*/}
        {/*  <IconButton aria-label="like" onClick={() => { props.likeCallback() }}>*/}
        {/*    <ThumbUpIcon />*/}
        {/*    </IconButton>*/}
        {/*</Grid>*/}

        {/*<Grid item>*/}
        {/*  { props.likes }*/}
        {/*</Grid>*/}

        {/*<div className={ classes.divider } />*/}

        {/*<Grid item>*/}
        {/*  <IconButton aria-label="dislike" onClick={() => { props.dislikeCallback() }}>*/}
        {/*    <ThumbDownIcon />*/}
        {/*  </IconButton>*/}
        {/*</Grid>*/}

        {/*<Grid item>*/}
        {/*  { props.dislikes }*/}
        {/*</Grid>*/}

        {/*<div className={ classes.divider } hidden={ !adminLoggedIn } />*/}

        <Grid item hidden={ !adminLoggedIn }>
          <IconButton aria-label="edit" onClick={() => { props.editPostCallback() }}>
            <EditIcon />
          </IconButton>
        </Grid>

        <div className={classes.divider} hidden={ !adminLoggedIn } />

        <Grid item hidden={ !adminLoggedIn }>
          <IconButton aria-label="delete" onClick={() => { props.deletePostCallback() }}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}