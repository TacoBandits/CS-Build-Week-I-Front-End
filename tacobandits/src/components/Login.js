import React from 'react';
import axios from 'axios';
import tacocat from '../images/TACOCAT.svg';
import { Form, Button, Image, Icon } from 'semantic-ui-react';

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
			<div className='logContainer'>
				<div className='formThing'>
					<h2 className='loginH2'>I am Madam Tacocat,</h2>
					<h2 className='loginH2'>Purrrrrveyor of Palindromes!</h2>
					<h2 className='loginH2'>Thanks for coming back to save me!</h2>
					<Image size="mini" src={tacocat} style={{ width: "250px", height: "250px" }} />
					<Form onSubmit={this.handleSubmit}>
						<Form.Input
							className='formInput'
							label='Username:'
							name='username'
							id='username'
							type='text'
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Form.Input
							className='formInput'
							label='Password:'
							name='password'
							id='password'
							type='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Button className='bigButton' type='submit'>Let's Save Tacocat!
					</Button>
						<Icon name="paw" size="big"></Icon>
					</Form>
				</div>
			</div>
		)
	}
}

export default Login