// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import Diary from './components/Diary';
import Weight from './components/Weight';
import UserDetails from './components/UserDetails';

class App extends Component {
  state = { userId: 27 };
  render() {
    return (
      <Fragment>
        <Form userId={this.state.userId} />
        <Diary userId={this.state.userId} />
        <Weight userId={this.state.userId} />
        <UserDetails userId={this.state.userId} />
      </Fragment>
    );
  }
}

export default App;
