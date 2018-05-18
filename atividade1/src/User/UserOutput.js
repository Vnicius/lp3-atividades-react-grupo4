import React, { Component } from 'react';
import './user.css';

export default class UserOutput extends Component {
  render() {
    return (
      <div>
        <p className="p-title" >Usuário: </p>
        <p className="p-text">{this.props.name}</p>
      </div>
    )
  }
};
