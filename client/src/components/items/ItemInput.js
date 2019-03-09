import React, { Component} from 'react';


class ItemInput extends Component {

  constructor() {
    super();
    this.state = {
      itemname: '',
      user_id: null,
      make: '',
      model: '',
      upc: '',
      purchase_date: null,
      serial_num: '',
      purchase_price: null,
      roomId: null,
    };
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    state.roomId = this.props.roomId
    this.setState(state)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state)
    this.setState({itemname: ''})
  }
  render(){
    return(
      <div>ItemInput
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input type="text" name="itemname" onChange={(event) =>
        this.handleChange(event)} value={this.state.itemname}/>
        <p>User ID</p>
        <input type="text" name="userid" onChange={(event) =>
        this.handleChange(event)} value={this.state.userid}/>
        <p>Make</p>
        <input type="text" name="make" onChange={(event) =>
        this.handleChange(event)} value={this.state.make}/>
        <p>Model</p>
        <input type="text" name="model" onChange={(event) =>
        this.handleChange(event)} value={this.state.model}/>
        <p>UPC</p>
        <input type="text" name="upc" onChange={(event) =>
        this.handleChange(event)} value={this.state.upc}/>
        <p>Purchase Date</p>
        <input type="text" name="purchase_date" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_date}/>
        <p>Serial Number</p>
        <input type="text" name="serial_num" onChange={(event) =>
        this.handleChange(event)} value={this.state.serial_num}/>
        <p>Purchase Price</p>
        <input type="text" name="purchase_price" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_price}/>
        <br></br>
        <input type="submit" />
        </form>
      </div>
    )
  }
}
export default ItemInput
