import React, { Component } from 'react';
import RoomInput from '../components/rooms/RoomInput'
import Rooms from '../components/rooms/Rooms';
import { connect } from 'react-redux';
import { getRoom} from '../actions/roomActions';
import { removeRoom} from '../actions/roomActions';
import { addRoom} from '../actions/roomActions';

class RoomsContainer extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.match.params.id, this.props.houses)
  }

render(){
  console.log("rooms container")
  /*define houses from props, iterate to find house using house id passed in from match.props*/

  const {houses, rooms, removeRoom, addRoom} = this.props;
  let house = houses.find(h => h.id === parseInt(this.props.match.params.id))

  return(
    <div>
       <h3>Home: {house.name}</h3>
       <Rooms houses={houses} house={house} rooms={rooms} removeRoom={removeRoom}/>
       <RoomInput addRoom={addRoom} houseId={house.id}/>
    </div>
    )
  }
}

const mapStateToProps = state => (

  {houses: state.homes.houses, rooms: state.homes.rooms}

)
export default connect(mapStateToProps, {getRoom, addRoom,removeRoom} ) (RoomsContainer)
