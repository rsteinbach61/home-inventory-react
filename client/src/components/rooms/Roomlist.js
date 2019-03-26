import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Roomlist extends Component {

  handleOnClick(id){
      this.props.removeRoom(id)
    }

  render(){
    const {room} = this.props;
    return(
      <div>
        <li>
          <NavLink to={`/room/${room.id}`}>
            {room.name}
          </NavLink>
          <button onClick={() => this.handleOnClick(room.id)}> X </button>
        </li>
      </div>
    )
  }
}
export default Roomlist;
