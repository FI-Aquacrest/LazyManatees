import React, { Fragment, Component } from 'react'
import Title from './blog/Title'
import Content from './blog/Content'
import Toolbar from './blog/Toolbar'

class BlogPost extends Component {
  state = {
    isLoading: true,
    blogObjects: [],
    isEditable: false
  };

  async componentDidMount() {
    const response = await fetch('/api/blogposts');
    const body = await response.json();
    this.setState({ blogObjects: body, isLoading: false });
  }

  editPostCallback() {
    this.setState({ isEditable: true })
  }

  render() {
    const {blogObjects, isLoading, isEditable} = this.state;
    const blogObject = blogObjects[blogObjects.length-1]

    if (isLoading) {
      return <p>Loading...</p>;
    }

    let likes = 11;
    let dislikes = 999;

    return (
      <Fragment>
        <Title blogTitle={ blogObject.blogTitle } userName={ blogObject.userName } isEditable={ isEditable } />
        <hr />
        <Content blogPost={ blogObject.blogPost } isEditable={ isEditable } />

        <Toolbar likes={ likes } dislikes={ dislikes }
          editPostCallback={ this.editPostCallback.bind(this) } />

      </Fragment>
    )
  }
}

export default BlogPost;