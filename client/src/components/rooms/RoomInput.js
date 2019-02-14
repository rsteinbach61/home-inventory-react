import React, { Component } from 'react';


class RoomInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {

    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRoom(this.state)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>Add Room
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="roomname" onChange={(event) =>
          this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
          </form>

      </div>
    );
  };


};
export default RoomInput;
