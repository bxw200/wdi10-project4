import React, {PropTypes} from 'react';

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Error from './components/Error/Error';


const Main = () => (
  // switch is a component from react-router
  <Router>
  <Switch>
    <Route exact path = '/login' component = {Login}></Route>
    <Route exact path = '/Logout' component = {Logout}></Route>
    <Route exact path = '/signUp' component = {SignUp}></Route>
    <Route component = {Error}></Route>
  </Switch>
</Router>

)

export default Main;
