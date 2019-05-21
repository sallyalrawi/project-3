import React, { Component, Fragment } from 'react';
import { getWeight, postWeight } from '../../../../api';

class Weight extends Component {
  state = { weight: '', previousWeights: [] };

  componentDidMount() {
    this.loadWeight(this.props.userId);
  }

  async loadWeight(userId) {
    try {
      const response = await getWeight(userId);
      this.setState({ previousWeights: response.data });
      console.log(this.state.previousWeights);
    } catch (error) {
      throw error;
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { userId, weight } = this.state;
    postWeight(userId, { weight });
    this.setState({ weight: '' });
  };

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

export default Weight;