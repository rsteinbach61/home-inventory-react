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
        <label for="name">Name</label>
        <input type="text" id="name" name="name" onChange={(event) =>
        this.handleChange(event)} value={this.state.name} size="50"/>
        <input type="hidden" id="user_id" name="user_id" onChange={(event) =>
        this.handleChange(event)} value={this.state.user_id}/>
        <label for="make">Make</label>
        <input type="text" id="make" name="make" onChange={(event) =>
        this.handleChange(event)} value={this.state.make}/>
        <label for="name">Model</label>
        <input type="text" name="model" onChange={(event) =>
        this.handleChange(event)} value={this.state.model}/>
        <label for="upc">UPC</label>
        <input type="text" id="upc" name="upc" onChange={(event) =>
        this.handleChange(event)} value={this.state.upc}/>

        <label for="serial_num">Serial Number</label>
        <input type="text" id="serial_num" name="serial_num" onChange={(event) =>
        this.handleChange(event)} value={this.state.serial_num}/>
        <label for="purchase_price">Purchase Price</label>
        <input type="text" id="purchase_price" name="purchase_price" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_price}/>
        <label for="purchase_date">Purchase Date</label>
        <input type="text" id="purchase_date" name="purchase_date" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_date}/>
        <br></br>

        <input type="submit" size="20"/>
        </form>
      </div>
    )
  }
}
export default ItemInput
