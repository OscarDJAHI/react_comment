import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import commentApp from './reducers';
import App from './components/App';

const createPersistentStore = compose(
  persistState('comments', { key: 'commentApp' })
)(createStore);

const store = createPersistentStore(commentApp);

render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('App'));
