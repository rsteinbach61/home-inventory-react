import React, { Component } from 'react';

class Home extends Component {

  handleOnClick(id){
    debugger;
      this.props.deleteHome(id)
    }

  render(){
    const {home} = this.props;
    debugger;
    return(
      <div>
      <li>
        {home.name}
        <button onClick={() => this.handleOnClick(home.id)}> X </button>
      </li>
      </div>
    )
  }
}
export default Home;
