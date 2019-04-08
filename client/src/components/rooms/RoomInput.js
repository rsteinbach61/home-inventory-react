import React, { Component } from 'react';


class RoomInput extends Component {

  constructor() {
    super();
    this.state = {
      roomname: '',
      houseId: null,
    };
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    state.houseId = this.props.houseId
    this.setState(state)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRoom(this.state)
    this.setState({roomname: ''})
  }

  render() {
    return (
      <div>Add Room
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="roomname" onChange={(event) =>
          this.handleChange(event)} value={this.state.roomname} size="30"/>
          <input type="submit" />
          </form>

      </div>
    );
  };


};
export default RoomInput;
