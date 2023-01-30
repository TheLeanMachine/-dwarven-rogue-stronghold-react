import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MonsterTable } from './main/components/MonsterTable';
import { DwarfTable } from './main/components/DwarfTable';

import { Game } from './main/domain/Game';
import { Dwarf } from './main/domain/unit/Dwarf';
import { Rat } from './main/domain/unit/monster/Rat';
import { Dice } from './main/domain/Dice';

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
      </header>
    </div>
  );
}

export default App;
