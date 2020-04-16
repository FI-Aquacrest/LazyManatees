import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'

class NewPostForm extends Component {

  state = {
    title: '',
    writer: '',
    content: '',
    editPostId: null,
    editing: false
  }

  componentDidMount() {
    if (this.props.blogObject !== undefined) {
      this.setState({ title: this.props.blogObject.blogTitle,
                      writer: this.props.blogObject.userName,
                      content: this.props.blogObject.blogPost,
                      editPostId: this.props.blogObject.id,
                      editing: true })
    }
  }

  titleChangeEvent(event) {
    this.setState({ title: event.target.value })
  }

  writerChangeEvent(event) {
    this.setState({ writer: event.target.value })
  }

  contentChangeEvent(event) {
    this.setState({ content: event.target.value })
  }

  postCommand() {
    const writer = this.state.writer;
    const content = this.state.content;
    const title = this.state.title;

    if (writer === '' || content === '' || title === '') {
      alert('Please make sure to fill all fields.');
    } else if (this.state.editing) {
      fetch('/api/blogposts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: writer,
          blogPost: content,
          blogTitle: title,
          id: this.state.editPostId
        })
      }).then(
        alert("Post Updated")
      ).then(
        window.location.href = '/' + (this.state.editPostId - 1)
      )
    } else {
      fetch('/api/blogposts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: writer,
          blogPost: content,
          blogTitle: title
        })
      }).then(
        alert("Post Saved")
      ).then(
        window.location.href = '/'
      )
    }
  }

  render() {

    return (
      <Fragment>
        <form id='NewPostForm'>
          <label htmlFor='title'>Title</label><br />
          <input type='text' id='title' value={ this.state.title } style={{ width: '50%' }}
            onChange={ this.titleChangeEvent.bind(this)} />

          <br /><br />

          <label htmlFor='writer'>Writer</label><br />
          <input type='text' id='writer' value={ this.state.writer }
            onChange={ this.writerChangeEvent.bind(this) } />
          
          <br /><br />

          <label htmlFor='content'>Content</label><br />
          <textarea id='content' rows='15' cols='100' style={{ whiteSpace: 'pre-line' }}
            value={ this.state.content } onChange={ this.contentChangeEvent.bind(this) } />

          <br /><br />

          <Button variant='contained' onClick={ this.postCommand.bind(this) }>Post</Button>
        </form>
      </Fragment>
    )
  }
}

export default NewPostForm;