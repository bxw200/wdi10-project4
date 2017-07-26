import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SignUp from './components/SignUp/SignUp';
import Error from './components/Error/Error';
import Location from './components/Location/Location';
import Cart from './components/Cart/Cart';
import Itinerary from './components/Itinerary/Itinerary';
import Success from './components/Success/Success';
import Failure from './components/Failure/Failure';


const Main = () => (
  // switch is a component from react-router
<Router>
  <Switch>
    <Route exact path = '/' component = {Home}></Route>
    <Route exact path = '/locations' component = {Cart}></Route>
    <Route exact path = '/login' component = {Login}></Route>
    <Route exact path = '/logout' component = {Logout}></Route>
    <Route exact path = '/signUp' component = {SignUp}></Route>
    <Route exact path = '/itinerary' component = {Itinerary}></Route>
    <Route exact path = '/success' component = {Success}></Route>
    <Route exact path = '/failure' component = {Failure}></Route>
    <Route component = {Error}></Route>
  </Switch>
</Router>

)

export default Main;
