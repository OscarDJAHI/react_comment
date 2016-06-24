import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { deleteComment } from '../actions';

const getCommentList = (comments) => comments;

const mapStateToProps = (state) => ({ comments: getCommentList(state.comments) });

const mapDispatchToProps = (dispatch) => ({
  onDeleteComment: (id) => {
    dispatch(deleteComment(id));
  },
});

const ContainerCommentList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList);

export default ContainerCommentList;
