import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import History from '../History';

import AxiosInstance from "../service/AxiosInstance";
import BlogPost from "./BlogPost";

/**
 * Form used for creating new posts and editing old ones.
 */
class NewPostForm extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    title: '',
    writer: '',
    content: '',
    editPostId: null,
    editing: false,
    editingDone: false
  };

  /**
   * If there a blogObject to be edited exists, sets the state of all fields to the post's current values.
   */
  componentDidMount() {
    if (this.props.blogObject !== undefined) {
      this.setState({ title: this.props.blogObject.blogTitle,
                      writer: this.props.blogObject.userName,
                      content: this.props.blogObject.blogPost,
                      editPostId: this.props.blogObject.id,
                      editing: true })
    }
  }

  /**
   * Updates the Title -field when user changes it.
   *
   * @param event User changes the field's text.
   */
  titleChangeEvent(event) {
    this.setState({ title: event.target.value })
  }

  /**
   * Updates the Writer -field when user changes it.
   *
   * @param event User changes the field's text.
   */
  writerChangeEvent(event) {
    this.setState({ writer: event.target.value })
  }

  /**
   * Updates the Content -field when user changes it.
   *
   * @param event User changes the field's text.
   */
  contentChangeEvent(event) {
    this.setState({ content: event.target.value })
  }

  /**
   * If all of the textFields have text on them, sends the post for updating/saving.
   */
  postCommand() {
    const writer = this.state.writer;
    const content = this.state.content;
    const title = this.state.title;

    if (writer === '' || content === '' || title === '') {
      alert('Please make sure to fill all fields.');
    } else if (this.state.editing) {
      AxiosInstance.put('/api/blogposts', {
        userName: writer,
        blogPost: content,
        blogTitle: title,
        id: this.state.editPostId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.status === 200) {
          alert("Post Updated");
          this.props.refreshPostList();
          this.setState({
            editingDone: true
          });
        } else {
          alert("Authorization Required");
        }
      })
    } else {
      AxiosInstance.post('/api/blogposts', {
        userName: writer,
        blogPost: content,
        blogTitle: title
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("Post Saved");
          this.props.refreshPostList();
          History.push('/');
        } else {
          alert("Authorization Required");
        }
      })
    }
  }

  render() {

    if (this.state.editingDone) {
      return <BlogPost postId={ this.state.editPostId } />;
    }

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

          <Button variant='contained' onClick={ this.postCommand.bind(this) }>Save</Button>
        </form>
      </Fragment>
    )
  }
}

export default NewPostForm;