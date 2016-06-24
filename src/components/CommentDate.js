import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class CommentDate extends Component {
  constructor() {
    super();
    this.intervalId = 0;
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, this.props.pollInterval);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="CommentList-date">
        { moment(this.props.commentDate).fromNow() }
      </div>
    );
  }
}

CommentDate.propTypes = {
  commentDate: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired,
};

export default CommentDate;
