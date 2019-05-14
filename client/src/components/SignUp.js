/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../firebase'

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
      <h1>
        <small className="text-muted">
        Sign up</small>
      </h1>
      <form className="form-inline" onSubmit={handleSignUp}>
        <label className="sr-only" >
          Email </label>
        <input className="form-control mb-2 mr-sm-2"
          name="email"
          type="email"
          placeholder="Email"
        />
        <label className="sr-only">
          Password</label>
        <input className="form-control mb-2 mr-sm-2"
          name="password"
          type="password"
          placeholder="Password"
        />

        <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
