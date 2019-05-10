/* eslint-disable import/no-duplicates */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
// eslint-disable-next-line no-unused-vars
import { AuthProvider } from './Auth'
// eslint-disable-next-line no-unused-vars
import PrivateRout from './privateRoute'
class App extends React.Component {
  render () {
    return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRout exact path = "/" component={Home} authenticated={this.state.authenticated} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>

    )
  }
}

export default App
