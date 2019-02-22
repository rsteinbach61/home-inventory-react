import React, { Component } from 'react';

class Home extends Component {


  render() {
debugger;
    return(
      <div>

        Home page
        {this.props.match.params.id}
      </div>
    )
  }
}

export default Home
