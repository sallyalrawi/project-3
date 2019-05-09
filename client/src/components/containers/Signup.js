import React from 'react';
import {
  Row,
  Col,

  Button,
  Form
} from 'react-bootstrap';

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
      <Form onSubmit={this.onSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="email" type="email" placeholder="Text" val={this.state.email} onChange={this.onChangeText}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="username" type="text" placeholder="Email" val={this.state.username} onChange={this.onChangeText}/>
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
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    //   <View style={styles.container}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder='Username'
    //       autoCapitalize="none"
    //       placeholderTextColor='white'
    //       onChangeText={val => this.onChangeText('username', val)}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder='Password'
    //       secureTextEntry={true}
    //       autoCapitalize="none"
    //       placeholderTextColor='white'
    //       onChangeText={val => this.onChangeText('password', val)}
    //     />
    //     <TextInput
    //       style={styles.input}
    //       placeholder='Email'
    //       autoCapitalize="none"
    //       placeholderTextColor='white'
    //       onChangeText={val => this.onChangeText('email', val)}
    //     />
        
    //     <Button
    //       title='Sign Up'
    //       onPress={this.signUp}
    //     />
    //   </View>
    )
  }
}

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     backgroundColor: '#42A5F5',
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
export default SignUp;