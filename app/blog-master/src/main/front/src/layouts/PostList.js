import {Component, createElement} from 'react'

class PostList extends Component {
  state = {
    isLoading: true,
    blogObjects: []
  };

  async componentDidMount() {
    const response = await fetch('/api/blogposts/');
    const body = await response.json();
    this.setState({ blogObjects: body, isLoading: false });
  }

  render() {
    const blogObjects = this.state.blogObjects;
    let linkList = [];

    for (let x = 0; x < blogObjects.length; x++) {
      let link = createElement('a', {href: '/' + blogObjects[x].id}, blogObjects[x].blogTitle);
      linkList[x] = createElement('li', {key: x}, link);
    }

    return linkList.reverse();
  }
}

export default PostList;