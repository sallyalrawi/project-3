import React from 'react';
import {
  InputGroup,
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

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {

    const { username, password, email } = this.state
    
   
    //   console.log('user successfully signed up!: ' ,success);
    } 
  
 
  render() {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
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