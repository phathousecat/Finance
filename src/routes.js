// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import Bills from './components/Bills';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
	    <Route path="/bills" component={Bills} />
	    <Route path="/wallet" component={Bills} />
	    <Route path="/savings" component={Bills} />
	    <Route path="/debts" component={Bills} />
	    <Route path="/calendar" component={Bills} />
	    <Route path="*" component={NotFound} />
	</Route>
  </Router>
);

export default Routes;
