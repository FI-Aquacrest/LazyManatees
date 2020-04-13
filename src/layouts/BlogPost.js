import React, { Fragment, Component } from 'react'
import Title from './blog/Title'
import Content from './blog/Content'
import Toolbar from './blog/Toolbar'

class BlogPost extends Component {
  state = {
    isLoading: true,
    blogObjects: []
  };

  async componentDidMount() {
    const response = await fetch('/api/blogposts');
    const body = await response.json();
    this.setState({ blogObjects: body, isLoading: false });
  }

  render() {
    const {blogObjects, isLoading} = this.state;

    const blogPost = blogObjects[0];

    if (isLoading) {
      return <p>Loading...</p>;
    }

    console.log('Found something: ' + blogPost.blogPost)

    let likes = 11;
    let dislikes = 999;

    function likeCallback() {
      likes++;
      
      console.log('likes: ' + likes);
    }

    function dislikeCallback() {
      dislikes++;

      console.log('dislikes: ' + dislikes)
    }

    function editPostCallback() {
      console.log('editing');
    }

    function deletePostCallback() {
      console.log('post deleted (not really)')
    }

    return (
      <Fragment>
        <Title blogTitle={ blogPost.blogTitle } userName={ blogPost.userName } />
        <hr />
        <Content blogPost={ blogPost.blogPost } />

        <Toolbar likes={ likes } dislikes={ dislikes } likeCallback={ likeCallback }
        dislikeCallback={ dislikeCallback } editPostCallback={ editPostCallback }
        deletePostCallback={ deletePostCallback } />

      </Fragment>
    )
  }
}

export default BlogPost;