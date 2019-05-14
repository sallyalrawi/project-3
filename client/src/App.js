import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';

const App = () => (
  <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
