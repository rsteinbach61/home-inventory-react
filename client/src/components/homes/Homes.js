import React, { Component } from 'react';
import Homelist from './Homelist'
class Homes extends Component {



  render() {
  debugger;
    const {houses, deleteHome} = this.props;
    const list = houses.map(house => {
      return(
        <Homelist key={house.id}
          home={house}
          deleteHome={deleteHome}/>
      )
    })
    return(
      <div>
        <h1>Homes</h1>
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}

export default Homes
