import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './privateRoute';
import Navigation from './components/features/Navigation';
import Footer from './components/features/Footer';

const App = () => (
  <div className="bodyContent">
  <Navigation />
  <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" />
      </div>
    </Router>
  </AuthProvider>
  <Footer />
  </div>
);

export default App;