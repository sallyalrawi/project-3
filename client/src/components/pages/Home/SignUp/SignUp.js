/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { Component, useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../../../firebase';
import { Form, Button } from 'react-bootstrap';
import { postUser, postWeight } from '../../../../api';

class SignUp extends Component {
  state = {
    name: '',
    gender: '',
    age: '',
    heightFeet: '',
    heightInches: '',
    weight: ''
  };
  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  //  const SignUp = ({ history }) => {

  handleSignUp =
    // useCallback
    // (
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        const {
          name,
          gender,
          age,
          heightFeet,
          heightInches,
          weight
        } = this.state;
        const userHeight = parseInt(heightFeet) + parseInt(heightInches);
        const user = {
          name,
          gender,
          age,
          userHeight
        };
        postUser(email.value, user);
        postWeight(email.value, { weight });
        this.setState({
          name: '',
          gender: '',
          age: '',
          heightFeet: '',
          heightInches: '',
          weight: ''
        });

        this.props.history.push('/');
      } catch (error) {
        alert(error);
      }
    };
  // , [history]
  // )
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSignUp}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="">Choose</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="heightFeet">
            <Form.Label>Height</Form.Label>
            <Form.Control
              as="select"
              name="heightFeet"
              value={this.state.heightFeet}
              onChange={this.handleChange}
            >
              <option value="">Feet</option>
              <option value="36">3'</option>
              <option value="48">4'</option>
              <option value="60">5'</option>
              <option value="72">6'</option>
              <option value="84">7'</option>
            </Form.Control>
            <Form.Control
              as="select"
              name="heightInches"
              value={this.state.heightInches}
              onChange={this.handleChange}
            >
              <option value="">Inches</option>
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
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="weight">
            <Form.Label>Weight (lbs)</Form.Label>
            <Form.Control
              name="weight"
              type="text"
              value={this.state.weight}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(SignUp);
