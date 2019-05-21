import React, { Component, Fragment } from 'react';
import { getWeight, postWeight } from '../../../../api';

class Weight extends Component {
  state = {  weight: '', previousWeights: [] ,createdAt:'', updatedAt:[]};

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
    console.log(this.state.weight);
    return (
      <Fragment>
        <h1>Weight</h1>
        <ul>{this.state.previousWeights.map(record => <li key={record.id}><p>Weight: {record.weight}</p><p>Date: {record.updatedAt}</p></li>)}
        </ul>
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