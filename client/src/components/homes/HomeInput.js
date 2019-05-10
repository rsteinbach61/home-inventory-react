import React, { Component } from 'react';


class HomeInput extends Component {

  constructor() {
    super();
    this.state = {
      homename: ''
    };
  }



  handleSubmit = event => {
    event.preventDefault();
    console.log('A')
    this.props.addHome(this.state)
    this.setState({ homename: ''})
    console.log('B')
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    this.setState(state)
  }

  render() {
    return (
      <div>Add Home
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="homename" onChange={(event) =>
          this.handleChange(event)} value={this.state.homename} size="30"/>
          <input type="submit" />
          </form>

      </div>
    );
  };


};
export default HomeInput;
