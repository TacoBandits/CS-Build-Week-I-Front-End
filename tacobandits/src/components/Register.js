import React from 'react';
import axios from 'axios';
import tacocat from '../images/TACOCAT.svg';
import {Image, Form, Button} from 'semantic-ui-react';

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

		axios
			.post(endpoint, this.state)
			.then(response => {
        localStorage.setItem('key', response.key)
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<h2>I am Madam Tacocat, Purrrrrveyor of Palindromes! Please register to help me escape!</h2>
				<Image size="mini" src={tacocat} style={{width: "250px", height: "250px"}} /> 
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
					<Form.Input 
						label='username'
            			name='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					</Form.Field>
					<Form.Field>
					<Form.Input 
						label='password1' 
            			name='password1'
						id='password1'
						type='password'
						value={this.state.password1}
						onChange={this.handleChange}
					/>
					</Form.Field>
					<Form.Field>
          			<Form.Input 
						label='password2'
            			name='password2' 
						id='password2'
						type='password'
						value={this.state.password2}
						onChange={this.handleChange}
					/>
					</Form.Field>
					<Button type='submit'>Help tacocat escape!</Button>
				</Form>
			</div>
		)
	}
}

export default Register;