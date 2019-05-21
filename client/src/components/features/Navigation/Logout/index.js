import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../../../firebase';
import Button from 'react-bootstrap/Button';
import './style.css';

const logOutUser = () => {
  firebase.auth().signOut();
};
const Logout = () => {
  return (
    <Button
      className="logout"
      variant="light"
      onClick={logOutUser}
      children="Log Out"
      href="/"
    >
      Logout
    </Button>
  );
};
export default Logout;
