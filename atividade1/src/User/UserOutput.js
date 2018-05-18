import React, { Component } from 'react';

export default class UserOutput extends Component {
  render() {
    return (
      <div>
        <p>Usuário:</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
};
