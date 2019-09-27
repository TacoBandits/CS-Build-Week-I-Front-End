import React from 'react';
import axios from 'axios';
import tacocat from '../images/TACOCAT.svg';
import { Image, Form, Button } from 'semantic-ui-react';

class Register extends React.Component {
  state = {
    username: '',
    password1: '',
    password2: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const endpoint = 'https://tacobandits.herokuapp.com/api/registration/';
    console.log("register is running!")
    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem('key', response.key)
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='logContainer'>
        <div className='formThing'>
        <h2 className='loginH2'>I am Madam Tacocat,</h2>
        <h2 className='loginH2'>Purrrrrveyor of Palindromes!</h2>
        <h2 className='loginH2'>Please register to help me escape!</h2>
          <Image size="mini" src={tacocat} style={{ width: "250px", height: "250px" }} />
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                className='formInput'
                label='Username:'
                name='username'
                id='username'
                type='text'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                className='formInput'
                label='Password:'
                name='password1'
                id='password1'
                type='password'
                value={this.state.password1}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                className='formInput'
                label='Confirm Password:'
                name='password2'
                id='password2'
                type='password'
                value={this.state.password2}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button className='bigButton' type='submit'>Help Tacocat Escape!</Button>
          </Form>
        </div>

      </div>
    )
  }
}

export default Register;