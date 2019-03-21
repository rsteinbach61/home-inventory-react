import React, { Component} from 'react'

class Item extends Component {

  render(){
    debugger;
    return(
      <div>
        <h3>Item: </h3>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.make}</p>
        <p>{this.props.item.model}</p>
      </div>
    )
  }
}
export default Item
