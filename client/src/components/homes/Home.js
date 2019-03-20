import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rooms from '../rooms/Rooms';
import {getRoom} from '../../actions/roomActions';
import {addRoom}  from '../../actions/roomActions';
import RoomInput from '../rooms/RoomInput';

class Home extends Component {


  render() {

    const {houses, rooms} = this.props;
    let house = houses.filter(house => house.id === parseInt(this.props.match.params.id))

    return(
      <div>
        <h3>Home Page For:</h3>
        {house[0].name}
        <RoomInput addRoom={this.props.addRoom} houseId={house[0].id}/>

      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.homes.houses, rooms: state.rooms.rooms, room: state.rooms.room})

export default connect(mapStateToProps, {getRoom, addRoom}) (Home)

// <Rooms getRoom={this.props.getRoom} houses={houses} house={house[0]}/>
