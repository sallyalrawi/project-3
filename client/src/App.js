import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from './Auth';
import PrivateRoute from './privateRoute';
import './App.css';
import Rewards from './components/pages/Rewards';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const path = currentUser ? '/dashboard' : '/';
  return (
    <div className="bodyContent">
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
    </div>
  );
};

export default App;
