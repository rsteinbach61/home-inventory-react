import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {


  render() {
    const {houses} = this.props;
    let house = houses.filter(house => house.id === parseInt(this.props.match.params.id))

debugger;
    return(
      <div>
        <h3>Home Page For:</h3>
        {house[0].name}
      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.homes.houses})
export default connect(mapStateToProps) (Home)
