<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'

const PrivateRout = ({ component: RouteComponet, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponet {...routeProps} />
        ) : (
          <Redirect to={'/signup'} />
        )

      }
    />
  )
}
export default PrivateRout
=======
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

const PrivateRoute = ({ currentUser, path }) => {
  const renderRoute = () =>
    currentUser ? <Dashboard userId={currentUser.email} /> : <Home />;

  return <Route exact path={path} render={renderRoute} />;
};

export default PrivateRoute;
>>>>>>> 37beebfdd4adaee3a10ab45355c558cf0424b083
