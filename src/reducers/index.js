import { combineReducers } from 'redux';
import comments from './comments';
import { reducer as formReducer } from 'redux-form';

const commentApp = combineReducers({
  comments,
  form: formReducer,
});

export default commentApp;
