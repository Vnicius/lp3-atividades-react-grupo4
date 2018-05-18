import React, { Component } from 'react';

export default class UserInput extends Component {
  constructor(props) {
    super();
    this.state = {
      userName: props.initiaState,
    }
  }

  onChangeHandler(event) {
    this.setState({
      userName: event.target.value
    }, () => {
      this.props.changeUserName(this.state.userName)
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.userName} onChange={this.onChangeHandler.bind(this)}/>
      </div>
    )
  }
};