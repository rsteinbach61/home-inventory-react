import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Homelist extends Component {

  handleOnClick(id){
      this.props.deleteHome(id)
    }

  render(){
    const {home} = this.props;
    return(
    //  <div>
        <tr>
          <td>
          <NavLink to={`/home/${home.id}`}>
            {`${home.name} `}
          </NavLink>
        </td>
          <td>
          <button onClick={() => this.handleOnClick(home.id)}> X </button>
          </td>
        </tr>
      //</div>
    )
  }
}
export default Homelist;
