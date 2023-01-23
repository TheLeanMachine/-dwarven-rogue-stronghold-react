import React from 'react';
import { Dwarf } from '../domain/Dwarf';

const printRow = (dwarf: Dwarf) => {
  return (
    <tr>
      <td>{dwarf.name}</td>
      <td>{dwarf.hp}</td>
      <td>...</td>
      <td>...</td>
    </tr>
  );
};

interface DwarfListProps {
  dwarfs: Dwarf[]
}

interface DwarfListState {
  dwarfs: Dwarf[]
}

export class DefenderTable extends React.Component<DwarfListProps, DwarfListState> {

  constructor(props:DwarfListProps) {
    super(props);
    this.state = {dwarfs: props.dwarfs};
  }

  render() {
    return (
      <table id="defenders">
      <caption>Dwarven Defenders</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Lvl</th>
          <th>HP</th>
          <th>XP</th>
        </tr>
      </thead>
      <tbody>{ this.state.dwarfs.map(printRow) }</tbody>
    </table>
    );
  }
}

