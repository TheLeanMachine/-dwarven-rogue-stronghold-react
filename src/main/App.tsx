import React from 'react';
import logo from './resources/logo.svg';
import './App.css';

import { MonsterTable } from './components/MonsterTable';
import { DwarfTable } from './components/DwarfTable';

import { Game } from './domain/Game';
import { Dwarf } from './domain/unit/Dwarf';
import { Rat } from './domain/unit/monster/Rat';
import { Dice } from './domain/Dice';

import Big from 'big.js';

const dice = new Dice(8);

const ratHp = new Dice(4);
const monsters = [
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll()),
  new Rat(ratHp.roll())
];

const game = new Game();
const dwarfsSet = game.dwarfsInCombat;
const dwarfs: Dwarf[] = [];

dwarfsSet.forEach((dw) => dwarfs.push(dw));

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
          Some dice rolls: {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}, {dice.roll()}.
        </p>

        <p>
          Some decimal numbers: The sum of two {new Big('1.0').plus(new Big('2.0')).toString()} as well as a very big one {new Big('4.2e+12').toString()}.
        </p>
      </header>
    </div>
  );
}

export default App;
