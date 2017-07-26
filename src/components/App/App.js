import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Button, Navbar, NavItem, Nav, Grid, Image, Row, Col
} from 'react-bootstrap';

import Main from '../Routes/Routes';
import NavbarInstance from '../NavBar/NavBar';

import './App.css';

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
        <div clkassName="App-header">
          <NavbarInstance/>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
                <Main/>
            </Col>
          </Row>          
        </Grid>
      </div>
    );
  }
}

export default App;
