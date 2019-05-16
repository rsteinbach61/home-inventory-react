import React, { Component } from 'react';

class HomeSelect extends Component{

  constructor(props){
    super(props);
    debugger;
    this.state = {
      house_id: 0,
    }
  }

  onHouseChanged(e){
     debugger;
     let state = this.state
     let field = e.target.name
     state[field] = e.target.value.trim();
  }

  onSubmit(e){

}

render(){
  debugger;
  //my container passes houses in props
  const {houses} = this.props;

  //iterate over houses to create an array of options for select
  const list = houses.map((house) =>
    <option value={house.id} key={house.id} name="house_id">{house.name}</option>
  )


//set up the form to use the list array to populate the select options. Still needs an event handler to do something with the selected option.

  return(
    <div>
      <form onSubmit={this.onSubmit}>
        <select name="house_id"  onChange={(e)=>this.onHouseChanged(e)}>
           {list}
        </select>
      </form>
    </div>
    )
  }
}
export default HomeSelect
