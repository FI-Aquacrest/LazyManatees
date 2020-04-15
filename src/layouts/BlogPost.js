import React, { Fragment, Component } from 'react'
import Title from './blog/Title'
import Content from './blog/Content'
import Toolbar from './blog/Toolbar'
import NewPostForm from './NewPostForm'

class BlogPost extends Component {
  state = {
    isLoading: true,
    blogObject: null,
    editing: false
  };

  async componentDidMount() {
    const response = await fetch('/api/blogposts/' + this.props.postId );
    const body = await response.json();
    this.setState({ blogObject: body, isLoading: false });
  }

  editPostCallback() {
    this.setState({ editing: true });
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

        <Toolbar likes={ likes } dislikes={ dislikes } editPostCallback={ this.editPostCallback.bind(this) } />

      </Fragment>
    )
  }
}

export default BlogPost;