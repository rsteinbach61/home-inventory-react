import React, { Component } from 'react';
import Home from './Home'
class Homes extends Component {

  // handleOnClick(id){
  //   debugger;
  //     this.props.deleteHome(id)
  //   }

  render() {
    const {houses, deleteHome} = this.props;
    const list = houses.map(house => {
      return(
        <Home key={houses.id}
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
