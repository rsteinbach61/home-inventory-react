import React, { Component } from 'react';


class HomeInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {

    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHome(this.state)
    this.setState({text: ''})
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
