import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rooms from '../rooms/Rooms';
import {getRoom} from '../../actions/roomActions';

class Home extends Component {


  render() {
    debugger;
    const {houses} = this.props;
    let house = houses.filter(house => house.id === parseInt(this.props.match.params.id))


    return(
      <div>
        <h3>Home Page For:</h3>
        {house[0].name}
        <Rooms getRoom={this.props.getRoom}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.homes.houses, rooms: state.rooms.rooms})

export default connect(mapStateToProps, {getRoom}) (Home)
