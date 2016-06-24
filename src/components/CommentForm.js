import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import commentValidation from '../utils/commentValidation';
import cs from 'classnames';

class CommentForm extends Component {
  render() {
    const {
      fields: {
        username,
        link,
        email,
        content,
      },
      handleSubmit,
    } = this.props;

    const renderInput = (field, label, placeholder) =>
      <div className={
        cs({
          'Form-inputContainer': true,
          'is-inError': field.error && field.touched,
        })
     }>
        <label htmlFor={field.name} className="Form-label">{label}</label>
          <input type="text"
            className="Form-input"
            ref={label}
            placeholder={placeholder}
            name={label}
            {...field}
          />
          {field.error && field.touched && <div className="Form-error">{field.error}</div>}
      </div>;
    return (
      <div className="Form Form--addComment">
        <Link to="/list" className="Button Button--list">
          View Comment List
        </Link>
        <hr />
        <h1>Add Comment</h1>
        <form onSubmit={handleSubmit}>
          {renderInput(username, 'username', 'wakooka')}
          {renderInput(link, 'link', 'https://github.com/oscarDjahi')}
          {renderInput(email, 'email', 'djahi.herve@yahoo.fr')}
          <div className={
            cs({
              'Form-inputContainer': true,
              'is-inError': content.error && content.touched,
            })
         }>
            <label className="Form-label" htmlFor="content">content</label>
            <textarea
              ref="content"
              className="Form-textarea"
              cols="40"
              rows="8"
              id="content"
              {...content}
              placeholder="Markdown is supported, html tags will be stripped out"
            />
            {content.touched && content.error && <div className="Form-error">{content.error}</div>}
          </div>
          <button type="submit" className="Button Button--add">+ Add comment</button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
    email: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

CommentForm = reduxForm({
  form: 'commentForm',
  fields: ['username', 'link', 'email', 'content'],
  validate: commentValidation,
})(CommentForm);

export default CommentForm;
