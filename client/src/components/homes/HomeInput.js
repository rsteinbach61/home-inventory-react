import React, { Component } from 'react';


class HomeInput extends Component {

  constructor() {
    super();
    this.state = {
      homename: ''
    };
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value

    this.setState(state)
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addHome(this.state)
    this.setState({ homename: ''})
  }

  render() {
    return (
      <div>Add Home
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="homename" onChange={(event) =>
          this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
          </form>

      </div>
    );
  };


};
export default HomeInput;
