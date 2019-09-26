import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import World from './components/World';
import './App.css';

class App extends React.Component {

  logout = () => {
    localStorage.removeItem('key');
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/register'>Sign-Up</NavLink>
            <NavLink to='/login'>Log-In</NavLink>
            <NavLink to='/game'>Play!</NavLink>
            <p onClick={this.logout}>Log-Out</p>
          </nav>
        </header>
        
        <h1>Welcome to the Taco Bandits game!</h1>
        <p>. . . where you must escape from Tacocat, the Purrrrrrveyor of Palindromes!</p>
        <div>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/game' component={World} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
