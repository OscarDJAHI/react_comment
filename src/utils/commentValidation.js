import { createValidator, required, maxLength, email, url } from '../utils/validation';

const addComment = createValidator({
  username: [required, maxLength(20)],
  email: [required, email],
  link: url,
  content: required,
});
export default (addComment);
