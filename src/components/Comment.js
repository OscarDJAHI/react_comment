import React, { PropTypes } from 'react';
import marked from 'marked';
import CommentDate from './CommentDate';

const Comment = ({ username, link, email, content, creationDate, onDeleteClick }) => (
  <li className="CommentList-item">
    <div className="CommentList-detail">
      <p>
        {username} ({email})<br />
        {link}
      </p>
    </div>
    <div className="CommentList-body">
        <span dangerouslySetInnerHTML={ { __html: marked(content, { sanitize: true }) } } />
    </div>
    <CommentDate commentDate={creationDate} pollInterval={60000} />
    <button type="button" className="Button" onClick={() => onDeleteClick()}>Delete</button>
  </li>
);

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  link: PropTypes.string,
  email: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Comment;
