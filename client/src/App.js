// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
      <div className="bodyContent">
        <Navigation />
        <SignUp />
        <Router>
        <Switch>
          {/* {!this.props.isSignedIn ? <SignUp /> : <Dashboard />}
          <Route exact path="/" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/rewards" component={Rewards} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        </Router>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App
