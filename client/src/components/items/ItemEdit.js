import React, { Component} from 'react';


class ItemEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.item.name || '',
      user_id: 100,
      make: props.item.make || '',
      model: props.item.model || '',
      upc: props.item.upc || '',
      purchase_date: props.item.purchase_date || "",
      serial_num: props.item.serial_num || '',
      purchase_price: props.item.purchase_price || "",
      item_id: props.item.id || "",
    };
  }

  handleChange(event) {
//debugger;
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    state.item_id = this.props.item.id

    this.setState(state)
  }

  handleSubmit = event => {

    event.preventDefault();

    this.props.updateItem(this.state)
    this.setState({itemname: ''})
  }

  render(){

console.log("B")
    return(
      <div>

        <form onSubmit={this.handleSubmit} className="ItemInputForm">
          <legend>Edit Item</legend>

        <p>
          <label for="name">Name <input type="text" id="name" name="name"  onChange={(event) =>this.handleChange(event)} value={this.state.name}/></label>
        </p>
        <input type="hidden" id="user_id" name="user_id" onChange={(event) =>
        this.handleChange(event)} value={this.state.user_id}/>

        <p>
        <label for="make">Make <input type="text" id="make" name="make" onChange={(event) =>
        this.handleChange(event)} value={this.state.make}/></label>
        </p>
        <p>
        <label for="model">Model <input type="text" id="model" name="model" onChange={(event) =>
        this.handleChange(event)} value={this.state.model}/></label>
        </p>
        <p>
        <label for="upc">UPC <input type="text" id="upc" name="upc" onChange={(event) =>
        this.handleChange(event)} value={this.state.upc}/></label>
        </p>
        <p>
        <label for="serial_num">Serial Number <input type="text" id="serial_num" name="serial_num" onChange={(event) =>
        this.handleChange(event)} value={this.state.serial_num}/></label>
        </p>
        <p>
        <label for="purchase_price">Purchase Price <input type="text" id="purchase_price" name="purchase_price" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_price}/></label>
        </p>
        <p>
        <label for="purchase_date">Purchase Date <input type="text" id="purchase_date" name="purchase_date" onChange={(event) =>
        this.handleChange(event)} value={this.state.purchase_date}/></label>
        </p>


          <br></br>




          <input type="submit" className="button"/>
          </form>

      </div>
    )

  }
}
export default ItemEdit

/*
<input type="hidden" id="user_id" name="user_id" onChange={(event) =>
this.handleChange(event)} value={this.state.user_id}/>

<p>
<label for="make">Make <input type="text" id="make" name="make" onChange={(event) =>
this.handleChange(event)} value={this.state.make}/></label>
</p>
<p>
<label for="model">Model <input type="text" id="model" name="model" onChange={(event) =>
this.handleChange(event)} value={this.state.model}/></label>
</p>
<p>
<label for="upc">UPC <input type="text" id="upc" name="upc" onChange={(event) =>
this.handleChange(event)} value={this.state.upc}/></label>
</p>
<p>
<label for="serial_num">Serial Number <input type="text" id="serial_num" name="serial_num" onChange={(event) =>
this.handleChange(event)} value={this.state.serial_num}/></label>
</p>
<p>
<label for="purchase_price">Purchase Price <input type="text" id="purchase_price" name="purchase_price" onChange={(event) =>
this.handleChange(event)} value={this.state.purchase_price}/></label>
</p>
<p>
<label for="purchase_date">Purchase Date <input type="text" id="purchase_date" name="purchase_date" onChange={(event) =>
this.handleChange(event)} value={this.state.purchase_date}/></label>
</p> */

//this.props.location.state.name
//this.props.item.name
