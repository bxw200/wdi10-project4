import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../Home/Home';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import SignUp from '../SignUp/SignUp';
import Error from '../Error/Error';
import Location from '../Location/Location';
import Cart from '../Cart/Cart';
import Itinerary from '../Itinerary/Itinerary';
import Success from '../Success/Success';
import Failure from '../Failure/Failure';

import Deleteme from '../Deleteme/sajay';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path = '/' component={Home}></Route>
      <Route exact path = '/locations' component={Cart}></Route>
      <Route exact path = '/login' component={Login}></Route>
      <Route exact path = '/logout' component={Logout}></Route>
      <Route exact path = '/signUp' component={SignUp}></Route>
      <Route exact path = '/itinerary' component={Itinerary}></Route>
      <Route exact path = '/success' component={Success}></Route>
      <Route exact path = '/failure' component={Failure}></Route>
      <Route component={Error}></Route>
    </Switch>
  </Router>
)

export default Main;
