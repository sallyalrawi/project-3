/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../../../firebase';
import {Form, Button} from 'react-bootstrap';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await app.auth()
        .createUserWithEmailAndPassword(email.value, password.value)
      this.props.history.push('/')
    } catch (error) {
      alert(error)
    }
  }, [history]
  )
  return (
    <div>

<Form onSubmit={handleSignUp}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
  </Button>
      </Form>


      {/* <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form> */}
    </div>
  )
}

export default withRouter(SignUp)