/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../firebase'
import { AuthContext } from '../Auth.js'

const Login = ({ history }) => {
  const handleLogin = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await app.auth()
        .signInWithEmailAndPassword(email.value, password.value)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }, [history]
  )
  const value = useContext(AuthContext)

  // if (value) {
  //     return <Redirect to="/" />
  // }

  return (
    <div>
      <h1>
        <small class="text-muted">
        Log in</small>
      </h1>
      <form className="form-inline"onSubmit={handleLogin}>
        <label className="sr-only" >
          Email</label>
        <input className="form-control mb-2 mr-sm-2"
          name="email"
          type="email"
          placeholder="Email"
        />
        <label className="sr-only">
          Password   </label>
        <input className="form-control mb-2 mr-sm-2"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary mb-2">Log in</button>
      </form>
    </div>
  )
}

export default withRouter(Login)
