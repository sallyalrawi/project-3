import React, { Component, Fragment } from 'react';
import { getCalories } from '../../../../api';

class Calories extends Component {
//   state = {};

//   componentDidMount() {
//     this.loadCalories(this.props.userId);
//   }

//   async loadCalories(userId) {

//   }

  render() {
    return (
      <Fragment>
        <h1>Weight</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            name="weight"
            onChange={this.handleChange}
            value={this.state.weight}
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default Calories;