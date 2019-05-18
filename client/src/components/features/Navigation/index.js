import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from './Logout';

function Navigation() {
  return (
    <div className="main">
      <Navbar className="navbarBg navbar-dark" expand="lg">
        <Navbar.Brand href="/dashboard">
          <img alt="logo" className="logo" src="./images/cashcal.png" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navlink navs" href="/dashboard">
              My Dashboard
            </Nav.Link>
            <Nav.Link className="navlink navs" href="/rewards">
              Rewards
            </Nav.Link>
          </Nav>
          <Nav className="pull-right">
            <Logout />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
