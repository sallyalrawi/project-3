import React, { Component, Fragment } from 'react';
import { getWeight, postWeight } from '../../../../api';
import './style.css';
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
        <h1 className="head">Weight</h1>
        <div className="row">
          {this.state.previousWeights.map(record => <div className="row"><div className="col" key={record.id}>Weight: {record.weight}</div><div className="col">Date: {record.updatedAt}</div></div>)}
        </div>
        <form className = "form-inline" onSubmit={this.handleSubmit}>
          <label className ="my-1 mr-2" htmlFor="weight">Inter Your Weight</label>
          <input 
            type="text"
            name="weight"
            onChange={this.handleChange}
            value={this.state.weight}
          />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default Weight;