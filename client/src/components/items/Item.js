import React, { Component} from 'react'

class Item extends Component {

  render(){
    return(
      <div>
        <table>
          <th>Item</th>
            <tr>
              <td>Name</td>
              <td>{this.props.item.name}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{this.props.item.make}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{this.props.item.model}</td>
            </tr>
            <tr>
              <td>UPC</td>
              <td>{this.props.item.upc}</td>
            </tr>
            <tr>
              <td>Purchase Date</td>
              <td>{this.props.item.purchase_date}</td>
            </tr>
            <tr>
              <td>Purchase Price</td>
              <td>{this.props.item.purchase_price}</td>
            </tr>
            <tr>
              <td>Serial Num</td>
              <td>{this.props.item.serial_num}</td>
            </tr>

        </table>

      </div>
    )
  }
}
export default Item

// <p>Name: {this.props.item.name}</p>
// <p>Make: {this.props.item.make}</p>
// <p>Model: {this.props.item.model}</p>
// <p>UPC: {this.props.item.upc}</p>
// <p>Purchase Date: {this.props.item.purchase_date}</p>
// <p>Price: {this.props.item.purchase_price}</p>
// <p>Serial Num: {this.props.item.serial_num}</p>
