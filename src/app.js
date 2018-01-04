/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import App from './app/App';
import About from './app/about';
import Home from './app/home';
import BlogList from './app/blog-list';
import BlogPost from './app/blog-list/blog-post';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About} />
      <Route path='home' component={Home} />
      <Route path='posts' component={BlogList} />
      <Route path='posts/:id' component={BlogPost} />
      <Redirect from='*' to='/home'/>
    </Route>
  </Router>
), document.getElementById('root'));
