import React, { PropTypes } from 'react';
import { ReactDOM } from 'react-dom'
import {
  Button, NavDropdown, MenuItem, Navbar, NavItem, Nav
} from 'react-bootstrap';

// import { LinkContainer } from 'react-router-bootstrap';
// import { Route, RouteHandler, Link } from 'react-router';
import './NavBar.css';

const NavbarInstance = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">iTINA</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>

          <li><a href='/locations'>Places to visit</a></li>
          <li><a href='/locations'>Budget</a></li>

        <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>

      <li><a href='/signUp'>Sign Up</a></li>
      <li><a href='/login'>Log In</a></li>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;


//To enable links to Sign Up and Login ages: amended the following originally below Nav<pullright>:
//  <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
//  <NavItem eventKey={2} href="./Login">Login</NavItem>
