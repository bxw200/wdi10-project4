import React, { PropTypes } from 'react';
import { ReactDOM } from 'react-dom'
import {
  Button, NavDropdown, MenuItem, Navbar, NavItem, Nav
} from 'react-bootstrap';

// import { LinkContainer } from 'react-router-bootstrap';
// import { Route, RouteHandler, Link } from 'react-router';
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
        {/*<NavDropdown eventKey={3} title="Select trip by" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/trip_selection"><em>Categories</em></MenuItem>
          <MenuItem eventKey={3.2}> <em>Price <strong>$$</strong></em></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}><i>Help me decide</i></MenuItem>
        </NavDropdown>*/}
        <Nav pullRight>
          <NavItem eventKey={1} href="/signUp">Sign Up</NavItem>
          <NavItem eventKey={2} href="/login">Log In</NavItem>
        </Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;


//To enable links to Sign Up and Login ages: amended the following originally below Nav<pullright>:
//  <NavItem eventKey={1} href="/signup">Sign Up</NavItem>
//  <NavItem eventKey={2} href="./Login">Login</NavItem>
