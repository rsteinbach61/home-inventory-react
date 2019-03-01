import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Homelist extends Component {

  handleOnClick(id){
      this.props.deleteHome(id)
    }

  render(){
    const {home} = this.props;
    return(
      <div>
        <li>
          <NavLink to={`/home/${home.id}`}>
            {home.name}
          </NavLink>
          <button onClick={() => this.handleOnClick(home.id)}> X </button>
        </li>
      </div>
    )
  }
}
export default Homelist;