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
				<h2>Welcome, Please Register!</h2>
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
						label='password1' 
            name='password1'
						id='password1'
						type='password'
						value={this.state.password1}
						onChange={this.handleChange}
					/>
          <input 
						label='password2'
            name='password2' 
						id='password2'
						type='password'
						value={this.state.password2}
						onChange={this.handleChange}
					/>
					<button type='submit'>submit</button>
				</form>
			</div>
		)
	}
}

export default Register;