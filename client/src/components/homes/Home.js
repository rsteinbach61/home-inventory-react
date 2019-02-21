import React, { Component } from 'react';

class Home extends Component {

  handleOnClick(id){
      this.props.deleteHome(id)
    }

  render(){
    const {home} = this.props;
    return(
      <div>
      <li>
        {home.name}
        {home.id}
        <button onClick={() => this.handleOnClick(home.id)}> X </button>
      </li>
      </div>
    )
  }
}
export default Home;
