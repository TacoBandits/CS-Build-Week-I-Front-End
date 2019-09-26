import React from 'react';

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
		const endpoint = 'http://localhost:8000/api/login';

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
				<h2>Welcome, Log-In!</h2>
				<form onSubmit={this.handleSubmit}>
					
					<input 
						label='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleSubmit}
					/>
					<input 
						label='password' 
						id='password'
						type='text'
						value={this.state.password}
						onChange={this.handleSubmit}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		)
	}
}

export default Login