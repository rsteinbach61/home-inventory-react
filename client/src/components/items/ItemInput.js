import React, { Component} from 'react';


class ItemInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      user_id: 100,
      make: '',
      model: '',
      upc: '',
      purchase_date: "",
      serial_num: '',
      purchase_price: "",
      room_id: "",
    };
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    state.room_id = this.props.roomId
    this.setState(state)
  }

  handleSubmit = event => {

    event.preventDefault();
    this.props.addItem(this.state)
    this.setState({itemname: ''})
  }
  render(){
    return(
      <div id="item_input">
      <form onSubmit={this.handleSubmit} className="ItemInputForm">
        <p>Name:</p>
        <input type="text" name="name" onChange={(event) =>
        this.handleChange(event)} value={this.state.name} size="50"/>
      <p>User ID:</p>
        <input type="text" name="user_id" onChange={(event) =>
        this.handleChange(event)} value={this.state.user_id}/>
      <p>Make:</p>
        <input type="text" name="make" onChange={(event) =>
        this.handleChange(event)} value={this.state.make}/>
      <p>Model:</p>
        <input type="text" name="model" onChange={(event) =>
        this.handleChange(event)} value={this.state.model}/>
      <p>UPC:</p>
        <input type="text" name="upc" onChange={(event) =>
        this.handleChange(event)} value={this.state.upc}/>
      <p>Purchase Date:</p>
        <input type="text" name="purchase_date" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_date}/>
        <p>Serial Number</p>
        <input type="text" name="serial_num" onChange={(event) =>
        this.handleChange(event)} value={this.state.serial_num}/>
        <p>Purchase Price</p>
        <input type="text" name="purchase_price" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_price}/>
        <br></br>
        <input type="submit" size="20"/>
        </form>
      </div>
    )
  }
}
export default ItemInput
