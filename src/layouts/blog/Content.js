import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}))

export default function Content() {
  const classes = useStyles()

  return <p>
    Lorem ipsum dolor sit amet, at blandit ac nonummy, rutrum lacus. Ipsum sed magnis velit purus sodales. Quisque tortor arcu mauris est, amet eget eleifend nam ac nibh facilisis, arcu non, pharetra ante metus mi tempus pede non, lectus tellus fringilla aliquam mattis sed. Blandit lobortis. Pulvinar quisque, porta porttitor interdum amet tortor in. Auctor neque, quam cursus orci, molestie malesuada suscipit duis magna. Turpis mattis vivamus hendrerit libero. Sed suspendisse ligula feugiat erat phasellus eget, felis vel justo libero ut phasellus, proin suscipit justo curabitur et class lobortis, nec dictum proin cras ut, ac sapien massa imperdiet at in scelerisque.
    <br /><br />
    Cras quis lobortis blandit quisque viverra massa. Mauris posuere magna sem dictumst tellus sollicitudin, non eu per sed quisque. Lacus maecenas tortor vivamus ligula, amet libero bibendum feugiat magna non id, nec nullam neque luctus a at. Phasellus maecenas venenatis tellus nec tellus, pede amet rutrum vestibulum sodales. Diam montes suscipit. Egestas turpis ornare, nam at hymenaeos cras id ipsum, sed eros non. Tincidunt ligula eget, sed eros dui dignissim in nulla in. Mauris quam felis tellus, tellus neque magna, id placerat blandit nunc nibh gravida imperdiet, vel est gravida semper vel platea sodales, eget duis lectus purus et felis facilisis. Venenatis nulla ultrices ornare libero. Nulla in molestie quam, duis arcu in, torquent non.
    <br /><br />
    Vivamus a pellentesque mauris mollis quam justo, ipsum adipiscing. Orci orci enim, sit wisi congue donec non, dapibus aptent, rhoncus nulla sem in pharetra mauris pharetra. Diam ligula sapien velit vestibulum, eget amet sapien, libero eu, facilisis pellentesque et. Mollis lectus mauris vel imperdiet wisi a, consectetuer et sagittis vivamus, suspendisse dolor habitant nec. Vehicula inceptos consequat quis vitae adipiscing, imperdiet amet adipiscing sit at felis justo, aptent aliquet. Nibh a ornare.
    <br /><br />
    Tincidunt dolor curabitur eu elit mi cras, proin blandit ullamcorper diam lorem. Egestas viverra suspendisse ac vestibulum vivamus, consequat aliquam placerat. Elementum faucibus volutpat a at, risus ut iaculis ullamcorper duis. Ante blandit purus diam vivamus varius, eget magna erat integer, odio odio in ut morbi anim, nisl quis eget eleifend, sodales molestie tempor orci aliquam. Sem ipsum suspendisse fermentum quis quisque, malesuada mauris varius ac, facilisis duis wisi, varius laoreet sit imperdiet metus wisi, ligula pede. Labore orci nunc wisi ligula lacus et, metus lorem aliquam, arcu nulla. Luctus integer, class et suscipit sit donec nibh convallis. Dictum posuere, quis ut, massa erat pede wisi lacus.
  </p>
}