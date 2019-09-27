import React from 'react';
import axios from 'axios';
import tacocat from '../images/TACOCAT.svg';
import {Form, Button, Image, Icon} from 'semantic-ui-react';

class Login extends React.Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const endpoint = 'https://tacobandits.herokuapp.com/api/login/';

		axios
			.post(endpoint, this.state)
			.then(response => {
				localStorage.setItem('key', response.key)
				this.props.history.push('/game')
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<h2>I am Madam Tacocat, Purrrrveyor of Palindromes! Thanks for coming back to save me!</h2>
				<Image size="mini" src={tacocat} style={{width: "250px", height: "250px"}} /> 
				<Form onSubmit={this.handleSubmit}>
					<Form.Input 
						label='username'
						name='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<Form.Input 
						label='password' 
						name='password'
						id='password'
						type='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<Button type='submit'>let's save tacocat!
					</Button>
					<Icon name="paw" size="big"></Icon> 
				</Form>
			</div>
		)
	}
}

export default Login