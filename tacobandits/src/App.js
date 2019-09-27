import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import World from './components/World';
import './App.css';
import tacocat from './images/TACOCAT.svg';
import { Image, Button } from 'semantic-ui-react';

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
            <Button.Group>
              <Button className='bigButton'><NavLink className='navLink' to='/register'>Sign-Up</NavLink></Button>
              <Button className='bigButton'><NavLink className='navLink' to='/login'>Log-In</NavLink></Button>
              <Button className='bigButton'><NavLink className='navLink' to='/game'>Play!</NavLink></Button>
              <Button className='bigButton' onClick={this.logout}>Log-Out</Button>
            </Button.Group>
          </nav>
        </header>

        <div className='title'>
          <i className="fas fa-paw"></i>
          <h1>Tacocat Escape!</h1>
          <i className="fas fa-paw"></i>
        </div>


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
