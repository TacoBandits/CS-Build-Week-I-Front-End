import React from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Taco Bandits game!</h1>
      <p>. . . where you must escape from Tacocat, the Purrrrrrveyor of Palindromes!</p>
      <Login />
    </div>
  );
}

export default App;
