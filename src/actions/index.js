export const addComment = (form) => ({
  type: 'ADD_COMMENT',
  username: form.username,
  link: form.link,
  email: form.email,
  content: form.content,
  creationDate: new Date().toISOString(),
});

export const deleteComment = (id) => ({ type: 'DELETE_COMMENT', id });
