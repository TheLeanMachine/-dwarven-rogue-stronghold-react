import React from 'react';
import logo from './logo.svg';
import './App.css';

import './main/domain/Dwarf'
import { Dwarf } from './main/domain/Dwarf';

const gimli = new Dwarf('Gimli Gloinsohn', 42);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          My ass says { Math.floor(Math.random() * 6) } {gimli.name}.
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
    </div>
  );
}

export default App;
