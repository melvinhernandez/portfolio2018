import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavigationBar from '../Components/NavigationBar';
import Home from './Home/';

export default (props) => (
  <Router>
    <Fragment>
      <Route path="/" render={ (routeProps) =>
        <NavigationBar {...routeProps} {...props.navigation} />
      } />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </Router>
)