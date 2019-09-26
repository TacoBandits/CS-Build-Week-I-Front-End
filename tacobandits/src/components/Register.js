import React from 'react';
import axios from 'axios';

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
		const endpoint = 'http://localhost:8000/api/register';

		axios
			.post(endpoint, this.state)
			.then(response => {
				// gonna have to get this part figred out, how to grab key?
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<h2>Welcome, Please Register!</h2>
				<form onSubmit={this.handleSubmit}>
					
					<input 
						label='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleSubmit}
					/>
					<input 
						label='password1' 
						id='password1'
						type='password'
						value={this.state.password1}
						onChange={this.handleSubmit}
					/>
          <input 
						label='password2' 
						id='password2'
						type='password'
						value={this.state.password2}
						onChange={this.handleSubmit}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		)
	}
}

export default Register;