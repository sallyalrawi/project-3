/* eslint-disable import/no-duplicates */
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/Login'
import SignUp from './components/SignUp'
import planning from './components/planning'
// eslint-disable-next-line no-unused-vars
import { AuthProvider } from './Auth'
// eslint-disable-next-line no-unused-vars
import PrivateRoute from './privateRoute'
import app from './firebase'
class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount(){
    // app.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({
    //       // authenticated: true,
    //       // currentUser: user,
    //       loading: false
    //     });
    //   } else {
    //     this.setState({
    //       // authenticated: false,
    //       // currentUser: null,
    //       loading: false
    //     });
    //   }
    // });
  }

  render() {
    const { authenticated, loading } = this.state;
    
    return (
      <AuthProvider>
        <Router>    
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/plannig" component={planning} />
        </div>
       </Router>
      </AuthProvider>
    );
  }
}

export default App
