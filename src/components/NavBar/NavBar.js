import React, { PropTypes } from 'react';
import { ReactDOM } from 'react-dom'
import {
  Button, NavDropdown, MenuItem, Navbar, NavItem, Nav
} from 'react-bootstrap';

import './NavBar.css';

const NavbarInstance = () => (
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">iTINA</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
       <NavItem eventKey={1} href="/locations">Places to visit</NavItem>
       <NavItem eventKey={1} href="/trip_selection">Select trip by categories</NavItem>
        <Nav pullRight>
          <NavItem eventKey={1} href="/mytesting">Sign Up</NavItem>
          <NavItem eventKey={2} href="/login">Log In</NavItem>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;
