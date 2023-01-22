import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AttackerTable } from './main/components/AttackerTable';

import { Dwarf } from './main/domain/Dwarf';

const gimli = new Dwarf('Gimli Gloinsohn', 42);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="battle-screen">
          <AttackerTable />

          <table id="defenders">
            <caption>Monster Attackers</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lvl</th>
                <th>HP</th>
                <th>XP</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            </tbody>
          </table>
        </div>

        <p>
          My ass says { Math.floor(Math.random() * 6) } {gimli.name}.
        </p>
      </header>
    </div>
  );
}

export default App;
