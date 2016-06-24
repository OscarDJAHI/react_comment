const addComment = (state, action) => ({
  id: state.reduce((maxId, comment) => Math.max(comment.id, maxId), -1) + 1,
  username: action.username,
  link: action.link,
  email: action.email,
  content: action.content,
  creationDate: action.creationDate,
});

const findIndexToDelete = (state, action) => {
  const index = state.findIndex((elem) => {
    if (elem.id === action.id) {
      return true;
    }
    return null;
  });
  return index;
};

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        addComment(state, action),
      ];
    case 'DELETE_COMMENT':
      return [
        ...state.slice(0, findIndexToDelete(state, action)),
        ...state.slice(findIndexToDelete(state, action) + 1),
      ];
    default:
      return state;
  }
};

export default comments;
