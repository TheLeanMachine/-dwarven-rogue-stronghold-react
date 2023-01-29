import React from 'react';
import logo from './resources/logo.svg';
import './App.css';

import { MonsterTable } from './components/MonsterTable';
import { DwarfTable } from './components/DwarfTable';

import { Dwarf } from './domain/unit/Dwarf';
import { Rat } from './domain/unit/monster/Rat';
import { Dice } from './domain/Dice';

const gimli = new Dwarf('Gimli Gloinsohn', 42);
const dwarfs = [gimli];

const ratHp = new Dice(4)
const monsters = [
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll())
];

const dice = new Dice(6);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="battle-screen">
          <DwarfTable dwarfs={dwarfs} />
          <MonsterTable monsters={monsters} />
        </div>

        ---

        <p>
          Some dice rolls for "{gimli.name}": {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}.
        </p>
      </header>
    </div>
  );
}

export default App;
