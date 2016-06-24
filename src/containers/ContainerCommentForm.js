import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import { addComment } from '../actions';

class ContainerCommentForm extends Component {
  handleSubmit = (data) => {
    this.props.dispatch(addComment(data));
    browserHistory.push('/list/');
  }
  render() {
    return (
      <div>
        <CommentForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

ContainerCommentForm = connect()(ContainerCommentForm);

export default ContainerCommentForm;
