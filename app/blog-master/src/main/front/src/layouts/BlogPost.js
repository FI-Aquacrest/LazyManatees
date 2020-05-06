import React, { Fragment, Component } from 'react'
import Title from './blog/Title'
import Content from './blog/Content'
import Toolbar from './blog/Toolbar'
import NewPostForm from './NewPostForm'

import AxiosInstance from "../service/AxiosInstance";

class BlogPost extends Component {
  state = {
    isLoading: true,
    blogObject: null,
    editing: false
  };

  async componentDidMount() {
    // const response = await fetch('/api/blogposts/' + this.props.postId);
    // const body = await response.json();
    // this.setState({ blogObject: body, isLoading: false });

    AxiosInstance.get('/api/blogposts/' + this.props.postId)
        .then((response) => {
          this.setState({ blogObject: response.data, isLoading: false });
        });
  }

  editPostCallback() {
    this.setState({ editing: true });
  }

  deletePostCallback() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      // fetch('/api/blogposts', {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(
      //     this.state.blogObject
      //   )
      // }).then(response => {
      //   console.log(response);
      //   if (response.status === 200) {
      //     alert("Post Deleted");
      //     window.location.href = '/';
      //   } else {
      //     alert("Authorization Required");
      //   }
      // })

      AxiosInstance.delete('/api/blogposts', {
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(this.state.blogObject)
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("Post Deleted");
          window.location.href = '/';
        } else {
          alert("Authorization Required");
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  render() {
    const {blogObject, isLoading, editing} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    } else if (editing) {
      return (
        <NewPostForm blogObject={ blogObject } />
      )
    }

    if (blogObject.userName === undefined) {
      return <p>404</p>
    }

    let likes = 11;
    let dislikes = 999;

    return (
      <Fragment>
        <Title blogTitle={ blogObject.blogTitle } userName={ blogObject.userName } />
        <hr />
        <Content blogPost={ blogObject.blogPost } />

        <Toolbar likes={ likes } dislikes={ dislikes }
          editPostCallback={ this.editPostCallback.bind(this) }
          deletePostCallback={ this.deletePostCallback.bind(this) } />

      </Fragment>
    )
  }
}

export default BlogPost;