<<<<<<< HEAD
/* eslint-disable import/no-duplicates */
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/Login'
import SignUp from './components/SignUp'
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

    // if (loading) {
    //   return <p>Loading..</p>;
    // }

    return (
      <AuthProvider>
        <Router>    
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
       </Router>
      </AuthProvider>
    );
  }
}
=======
import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './Auth';
import PrivateRoute from './privateRoute';
import './App.css';
import Rewards from './components/pages/Rewards';
import Footer from './components/features/Footer';
import Navigation from './components/features/Navigation';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const path = currentUser ? '/dashboard' : '/';
  return (
    <div className="bodyContent">
      {/* <Navigation className={handleNav}/> */}
      <Navigation />
      <Router>
        <Fragment>
          <Switch>
            <PrivateRoute path={path} currentUser={currentUser} />
            <Route
              exact
              path="/rewards"
              render={props => <Rewards {...props} currentUser={currentUser} />}
            />
          </Switch>
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
};
>>>>>>> 37beebfdd4adaee3a10ab45355c558cf0424b083

export default App;
