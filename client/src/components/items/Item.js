import React, { Component} from 'react'
import { Link } from 'react-router-dom';

class Item extends Component {

  render(){

    return(
      <div>
        <table>
          <tbody>
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
            </tbody>
        </table>
          <Link to={{
              pathname: `/item/${this.props.item.id}/edit`,
              state: {
                      name: this.props.item.name,
                      make: this.props.item.make,
                    //  addItem : this.props.addItem
                      }
            }}>Edit Item</Link>
      </div>
    )
  }
}
export default Item
