import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SignUp from './components/SignUp/SignUp';
import Error from './components/Error/Error';
import Location from './components/Location/Location';


const Main = () => (
  // switch is a component from react-router
<Router>
  <Switch>
    <Route exact path = '/' component = {Home}></Route>
    <Route exact path = '/locations' component = {Location}></Route>
    <Route exact path = '/Login' component = {Login}></Route>
    <Route exact path = '/Logout' component = {Logout}></Route>
    <Route exact path = '/signUp' component = {SignUp}></Route>
    <Route component = {Error}></Route>
  </Switch>
</Router>

)

export default Main;
