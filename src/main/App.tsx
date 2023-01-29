import React from 'react';
import logo from './resources/logo.svg';
import './App.css';

import { AttackerTable } from './components/AttackerTable';
import { DefenderTable } from './components/DefenderTable';

import { Dwarf } from './domain/Dwarf';

const gimli = new Dwarf('Gimli Gloinsohn', 42);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="battle-screen">
          <DefenderTable dwarfs={[gimli]} />
          <AttackerTable />
        </div>

        <p>
          My ass says {Math.floor(Math.random() * 6)} {gimli.name}.
        </p>
      </header>
    </div>
  );
}

export default App;
