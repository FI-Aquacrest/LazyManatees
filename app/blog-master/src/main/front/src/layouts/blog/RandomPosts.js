import {Component, createElement} from 'react'

class RandomPosts extends Component {
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
      let link = createElement('a', {href: '/' + x}, blogObjects[x].blogTitle);
      linkList[x] = createElement('li', {key: x}, link);
    }

    if (linkList.length > 3) {
      return this.shuffleArray(linkList).slice(0, 3);
    } else {
      return this.shuffleArray(linkList).slice(0, linkList.length);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

export default RandomPosts;