import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';
import './App.css';

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