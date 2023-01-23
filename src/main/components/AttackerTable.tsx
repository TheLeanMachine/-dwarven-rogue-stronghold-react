import React, { Component } from 'react';

export class AttackerTable extends React.Component {
  render() {
    return (
      <table id="attackers">
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
    );
  }
}

