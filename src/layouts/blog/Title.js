import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  Avatar: {
    height: '40px',
    width: '40px',
    float: 'left'
  },
  text: {
    float: 'left',
    marginTop: '12.5px',
    marginLeft: '5px'
  }
}))

export default function Title() {
  const classes = useStyles()
  const today = new Date()
  const date = today.getDate() + '.' + (today.getMonth()+1) +
    '.' + today.getFullYear()

  return (
    <Fragment>
      <h1>Blog Post Title</h1>

      <Grid container direction="row" alignItems="center"> 
        <Grid item>
          <Avatar className={classes.Avatar}>B</Avatar>
        </Grid>

        <Grid item>
          <p className={classes.text}>Written by Blog Writer<br />{date}</p>
        </Grid>
      </Grid>
    </Fragment>
  )
}