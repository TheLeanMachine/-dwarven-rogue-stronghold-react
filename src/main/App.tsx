import React from 'react';
import logo from './resources/logo.svg';
import './App.css';

import { MonsterTable } from './components/MonsterTable';
import { DwarfTable } from './components/DwarfTable';

import { Dwarf } from './domain/unit/Dwarf';

const gimli = new Dwarf('Gimli Gloinsohn', 42);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="battle-screen">
          <DwarfTable dwarfs={[gimli]} />
          <MonsterTable />
        </div>

        <p>
          My ass says {Math.floor(Math.random() * 6)} {gimli.name}.
        </p>
      </header>
    </div>
  );
}

export default App;
