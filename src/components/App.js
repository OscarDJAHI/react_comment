import React from 'react';
import Nav from '../components/Nav';
import CommentList from '../containers/ContainerCommentList';
import CommentForm from '../containers/ContainerCommentForm';
import { Router, Route, browserHistory } from 'react-router';
import '../../scss/app.scss';

const App = () => (
  <div className="CommentApp">
	<Router history={browserHistory} onUpdate={function scrollToTop() { window.scrollTo(0, 0); }}>
		<Route path="/" component={Nav} />
		<Route path="form" component={CommentForm} />
		<Route path="list" component={CommentList} />
	</Router>
  </div>
);

export default App;
