import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Rewards from './components/pages/Rewards';

const App = () => (
  <div className="bodyContent">
  <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" />
      </div>
    </Router>
  </AuthProvider>
  </div>
);

export default App;