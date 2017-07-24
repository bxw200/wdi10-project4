import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { Button, Navbar, NavItem, Nav, Grid, Image } from 'react-bootstrap';
import Main from '../../routes';

import NavbarInstance from '../NavBar/NavBar';


class App extends Component {
 constructor(props){
   super(props);

}

  onClick = (e) => {
    this.props.login(this.props.history);
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <NavbarInstance />
          <Main/>
        </div>

      </div>

    );
  }
}



export default App;
