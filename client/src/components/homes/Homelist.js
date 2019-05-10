import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Homelist extends Component {

// sets initial count value to zero in local state
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
//increment the vote count by one using local state
  upVote = () => {
    this.setState({
      count: this.state.count + 1
    })


  }

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
          <td>
          <button onClick={this.upVote}> Up Vote </button>
          </td>
          <td>
           {this.state.count}
          </td>
        </tr>
      //</div>
    )
  }
}
export default Homelist;
