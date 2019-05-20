import React, {useContext} from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from './Logout';
import { AuthContext } from '../../../Auth';

function Navigation() {

  const { currentUser } = useContext(AuthContext);
  const handleNav = currentUser ? 'main' : 'hideNav';

  return (
    <div className={handleNav}>
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
