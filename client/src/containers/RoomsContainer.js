import React, { Component } from 'react';
import RoomInput from '../components/rooms/RoomInput'
import Rooms from '../components/rooms/Rooms';
import { connect } from 'react-redux';
import { getRoom} from '../actions/roomActions';
import { removeRoom} from '../actions/roomActions';
import { addRoom} from '../actions/roomActions';
//import { bindActionCreators } from 'redux';

class RoomsContainer extends Component {

  componentDidMount() {


    this.props.getRoom(this.props.match.params.id, this.props.houses)
  }

render(){


  let house = this.props.houses.find(house => house.id === parseInt(this.props.match.params.id))
  debugger;
  //const {houses, rooms} = this.props;
  // let house = houses === [] ? [] : houses.find(house => house.id === parseInt(this.props.match.params.id))

  // let house = houses.filter(house => house.id === parseInt(this.props.match.params.id))


  return(
    <div>

       <h3>Home Page For: {house.name}</h3>

       <RoomInput addRoom={this.props.addRoom} houseId={house.id}/>
       <Rooms houses={this.props.houses} house={house} rooms={this.props.rooms} removeRoom={this.props.removeRoom}/>


    </div>
  )
}
}

const mapStateToProps = state => (

  {houses: state.homes.houses, rooms: state.homes.rooms, room: state.rooms.room})

  //const mapDispatchToProps = {getRoom, addRoom,removeRoom}

  // function mapDispatchToProps(dispatch) {
  //   return {
  //     dispatch,
  //     ...bindActionCreators({getRoom, addRoom, removeRoom}, dispatch)
  //   }
  // }

export default connect(mapStateToProps, {getRoom, addRoom, removeRoom} ) (RoomsContainer)
/*
// <h3>Home Page For: {house.name}</h3>
//
// <RoomInput addRoom={this.props.addRoom} houseId={house.id}/>
// <Rooms houses={houses} house={house} rooms={rooms} removeRoom={this.props.removeRoom}/>
*/
