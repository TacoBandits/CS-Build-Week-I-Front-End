import React from 'react';
import axios from 'axios';

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
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<h2>Welcome, Log-In!</h2>
				<form onSubmit={this.handleSubmit}>
					<input 
						label='username'
						name='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<input 
						label='password' 
						name='password'
						id='password'
						type='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		)
	}
}

export default Login