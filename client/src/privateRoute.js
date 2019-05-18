import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

const PrivateRoute = ({ currentUser }) => {
  const renderRoute = () =>
    currentUser ? <Dashboard userId={currentUser.email} /> : <Home />;

  return <Route render={renderRoute} />;
};

export default PrivateRoute;
