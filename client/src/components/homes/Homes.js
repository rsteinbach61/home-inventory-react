import React, { Component } from 'react';

class Homes extends Component {



  render() {
    debugger;
    const {houses} = this.props;
    const list = houses.map(house => {
      return(
        <li key={house.id}> {house.name} </li>
      )
    })
debugger;
    return(
      <div> Homes
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}

export default Homes
