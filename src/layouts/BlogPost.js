import React, { Fragment, Component } from "react"
import Title from './blog/Title'
import Content from './blog/Content'
import Toolbar from "./blog/Toolbar"

class BlogPost2 extends Component {
  state = {
    likes: 0,
    dislikes: 0
  }


}

export default function BlogPost() {
  let likes = 11;
  let dislikes = 999;

  function likeCallback() {
    likes++;
    
    console.log("likes: " + likes);
  }

  function dislikeCallback() {
    dislikes++;

    console.log("dislikes: " + dislikes)
  }

  function editPostCallback() {
    console.log("editing");
  }

  function deletePostCallback() {
    console.log("post deleted (not really)")
  }

  return (
    <Fragment>
      <Title />
      <hr />
      <Content />

      <Toolbar likes={ likes } dislikes={ dislikes } likeCallback={ likeCallback }
      dislikeCallback={ dislikeCallback } editPostCallback={ editPostCallback }
      deletePostCallback={ deletePostCallback } />

    </Fragment>
  )
}