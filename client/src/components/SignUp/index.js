import React from 'react';
import {Row, Col,Button,Form} from 'react-bootstrap';
// import  { FirebaseContext } from '../Firebase';

 class SignUp extends React.Component {
     constructor (props) {
        super(props);
        this.state = {
            username:"",
            password: "", 
            email:""
        };
    }

  onChangeText = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {

      console.log(this.state.email);
    }
  render() {
    return (
      // <FirebaseContext.Consumer>
      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="username" type="text" placeholder="Text" val={this.state.email} onChange={this.onChangeText}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="email" type="email" placeholder="Email" val={this.state.username} onChange={this.onChangeText}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="password" type="password" placeholder="Password" val={this.state.password} onChange={this.onChangeText}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign up</Button>
          </Col>
        </Form.Group>
      </Form>
    // </FirebaseContext.Consumer>
    );
  }
}
export default SignUp;
