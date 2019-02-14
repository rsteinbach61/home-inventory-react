import React, { Component } from 'react';
import Home from './Home'
class Homes extends Component {



  render() {
    const {houses, deleteHome} = this.props;
    const list = houses.map(house => {
      return(
        <Home key={house.id}
          home={house}
          deleteHome={deleteHome}/>
      )
    })
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
