import React, { Component} from 'react'

class Item extends Component {

  render(){
    debugger;
    return(
      <div>
        <h3>Item: </h3>
        <p>Name: {this.props.item.name}</p>
        <p>Make: {this.props.item.make}</p>
        <p>Model: {this.props.item.model}</p>
        <p>UPC: {this.props.item.upc}</p>
        <p>Purchase Date: {this.props.item.purchase_date}</p>
        <p>Price: {this.props.item.purchase_price}</p>
        <p>Serial Num: {this.props.item.serial_num}</p>

      </div>
    )
  }
}
export default Item
