import React, { Component } from 'react';
import RoomInput from '../components/rooms/RoomInput'
import Rooms from '../components/rooms/Rooms';
import { connect } from 'react-redux';
import { getRoom} from '../actions/roomActions';
import { addRoom} from '../actions/roomActions';

class RoomsContainer extends Component {

  componentWillMount() {
    this.props.getRoom(this.props.match.params.id, this.props.houses)
  }

render(){
  //this.props.getRoom(this.props.match.params.id, this.props.houses)

  const {houses, rooms} = this.props;
  let house = houses.filter(house => house.id === parseInt(this.props.match.params.id))

  // let rooms = this.props.getRoom(house[0].id, houses)
  // let list = [];
  //  rooms.then(rooms => {
  //
  //    list = rooms.map(room => {
  //      return room.name;
  //    })
  //    return list
  //  })



  return(
    <div>
      <h3>Home Page For:</h3>

      <RoomInput addRoom={this.props.addRoom} houseId={house[0].id}/>
      <Rooms houses={houses} house={house[0]} rooms={rooms}/>
    </div>
  )
}
}

const mapStateToProps = state => (

  {houses: state.homes.houses, rooms: state.homes.rooms, room: state.rooms.room})

  const mapDispatchToProps = {getRoom, addRoom,}

export default connect(mapStateToProps, mapDispatchToProps ) (RoomsContainer)


// {house[0].name}
