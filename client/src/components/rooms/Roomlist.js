import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Roomlist extends Component {

  handleOnClick(id){
      this.props.removeRoom(id)
    }

  render(){
    const {room} = this.props;
    return(
      <tr>
        <td>
          <NavLink to={`/room/${room.id}`}>
            {`${room.name} `}
          </NavLink>
        </td>
        <td>
          <button onClick={() => this.handleOnClick(room.id)}> X </button>
        </td>
      </tr>

    )
  }
}
export default Roomlist;
