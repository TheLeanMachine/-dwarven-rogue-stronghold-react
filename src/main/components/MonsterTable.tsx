import React from 'react';
import { Monster } from '../domain/unit/monster/Monster';

let counter = 0;
const printRow = (monster: Monster) => {
  counter++;
  return (
    <tr key={'monster-' + Number(counter).toString()}>
      <td>{monster.name}</td>
      <td>{monster.hp}</td>
      <td>{monster.xpValue}</td>
      <td>...</td>
    </tr>
  );
};

interface MonsterListProps {
  monsters: Monster[]
}

interface MonsterListState {
  monsters: Monster[]
}

export class MonsterTable extends React.Component<MonsterListProps, MonsterListState> {

  constructor(props: MonsterListProps) {
    super(props);
    this.state = { monsters: props.monsters };
  }

  render() {
    return (
      <table id="attackers">
        <caption>Monsters</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>XP Value</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>{this.state.monsters.map(printRow)}</tbody>
      </table>
    );
  }
}

