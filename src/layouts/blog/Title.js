import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
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
    marginTop: '24px',
    marginLeft: '45px'
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
      <Avatar className={classes.Avatar}>B</Avatar>
      <p className={classes.text}>Written by Blog Writer<br />{date}</p>
    </Fragment>
  )
}