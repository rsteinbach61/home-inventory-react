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

  const {houses} = this.props;
  debugger;
  let house = houses.find(h => h.id === parseInt(this.props.match.params.id))



  //const {houses, rooms} = this.props;
  // let house = this.props.houses === [] ? [] : houses.find(house => house.id === parseInt(this.props.match.params.id))

  // let house = this.props.houses.filter(house => house.id === parseInt(this.props.match.params.id))


  return(
    <div>

       <h3>Home: {house.name}</h3>

       <RoomInput addRoom={this.props.addRoom} houseId={house.id}/>
       <Rooms houses={this.props.houses} house={house} rooms={this.props.rooms} removeRoom={this.props.removeRoom}/>



    </div>
  )
}
}

const mapStateToProps = state => (

  {houses: state.homes.houses, rooms: state.homes.rooms, room: state.homes.room}
)

  //const mapDispatchToProps = {getRoom, addRoom,removeRoom}

export default connect(mapStateToProps, {getRoom, addRoom,removeRoom} ) (RoomsContainer)
