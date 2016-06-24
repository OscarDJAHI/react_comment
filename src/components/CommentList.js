import React, { PropTypes } from 'react';
import Comment from './comment';
import { Link } from 'react-router';

const CommentList = ({ comments, onDeleteComment }) => (
  <div className="CommentList">
    <Link to="/form" className="Button Button--add">
      + Add a comment
    </Link>
    <hr />
    <h1>Comment List</h1>
    <ul className="CommentList-container">
      {comments.map(comment =>
        <Comment
          key={comment.id}
          {...comment}
          onDeleteClick={() => onDeleteComment(comment.id)}
        />
      )}
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    link: PropTypes.string,
    email: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};

export default CommentList;
