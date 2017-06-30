import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { history } from './store.js';

//import component router
import App from './components/App.jsx';
import Home from './components/home/Home.jsx';
import Contact from './components/home/Contact.jsx';

export const renderRoutes = () => (
  <Router history={history}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route  path="/contact" component={Contact}/>
    </Route>
  </Router>
)
