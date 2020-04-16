import React, { Component, createElement } from 'react'

class HomePage extends Component {
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
      let link = createElement('a', {href: '/' + x}, blogObjects[x].blogTitle)
      const row = createElement('li', {}, link);
      linkList[x] = row;
    }

    return linkList;
  }
}

export default HomePage;