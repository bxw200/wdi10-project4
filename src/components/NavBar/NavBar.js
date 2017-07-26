import React, {PropTypes} from 'react';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import {ReactDOM} from 'react-dom'



const NavbarInstance = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="./">iTINA</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="../SignUp">Sign Up</NavItem>
        <NavItem eventKey={2} href="../Login">Login</NavItem>
        <NavItem eventKey={3} href="../Locations">Location</NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarInstance;
