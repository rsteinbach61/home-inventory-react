import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Itemlist extends Component {

  handleOnClick(id){
      this.props.deleteItem(id)
    }

  render(){
    const {item} = this.props;
    return(
      <div>
        <li>
          <NavLink to={`/room/${item.id}`}>
            {item.name}
          </NavLink>
          <button onClick={() => this.handleOnClick(item.id)}> X </button>
        </li>
      </div>
    )
  }
}
export default Itemlist;
