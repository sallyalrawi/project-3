/* eslint-disable import/no-duplicates */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/Login'
import SignUp from './components/SignUp'
// eslint-disable-next-line no-unused-vars
import { AuthProvider } from './Auth'
// eslint-disable-next-line no-unused-vars
import privateRoute from './privateRoute'
class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}
componentWillMount(){
  app.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({
        authenticated: true,
        currentUser: user,
        loading: false
      });
    } else {
      this.setState({
        authenticated: false,
        currentUser: null,
        loading: false
      });
    }
  });
}
export default App
