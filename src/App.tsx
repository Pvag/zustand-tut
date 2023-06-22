// test
//test 
/// ok
// ancora
// ok
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Breakfast } from './Components/Breakfast'
import { Hotel } from './Components/Hotel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Breakfast />
      <Hotel />
    </div>
  );
}

export default App;
