import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './Auth';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  const renderRoute = () =>
    currentUser ? <Dashboard userId={currentUser.uid} /> : <Home />;

  return <Route render={renderRoute} />;
};

export default PrivateRoute;