import React, { Component } from 'react';
import { postUser } from '../../api';

class UserDetails extends Component {
  state = {
    name: '',
    gender: '',
    age: '',
    heightFeet: '',
    heightInches: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, gender, age, heightFeet, heightInches } = this.state;
    const userHeight = parseInt(heightFeet) + parseInt(heightInches);
    const user = { name, gender, age, userHeight };
    postUser(this.props.userId, user);
    this.setState({
      name: '',
      gender: '',
      age: '',
      heightFeet: '',
      heightInches: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="">Choose</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <label htmlFor="heightFeet">Height</label>
        <select
          name="heightFeet"
          value={this.state.heightFeet}
          onChange={this.handleChange}
        >
          ><option value="">Feet</option>
          <option value="36">3'</option>
          <option value="48">4'</option>
          <option value="60">5'</option>
          <option value="72">6'</option>
          <option value="84">7'</option>
        </select>
        <select
          name="heightInches"
          value={this.state.heightInches}
          onChange={this.handleChange}
        >
          ><option value="">Inches</option>
          <option value="0">0"</option>
          <option value="1">1"</option>
          <option value="2">2"</option>
          <option value="3">3"</option>
          <option value="4">4"</option>
          <option value="5">5"</option>
          <option value="6">6"</option>
          <option value="7">7"</option>
          <option value="8">8"</option>
          <option value="9">9"</option>
          <option value="10">10"</option>
          <option value="11">11"</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserDetails;
