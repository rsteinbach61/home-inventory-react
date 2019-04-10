import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Itemlist extends Component {

  handleOnClick(id){
      this.props.removeItem(id)
    }

  render(){
    const {item} = this.props;

    return(
      <div>
        <tr>
          <td>
            <NavLink to={`/item/${item.id}`}>
              {`${item.name} `}
            </NavLink>
          </td>
            <td>
            <button onClick={() => this.handleOnClick(item.id)}> X </button>
          </td>
        </tr>
      </div>
    )
  }
}
export default Itemlist;
