import React, { Component } from 'react'
import Homes from '../components/homes/Homes';
import HomeInput from '../components/homes/HomeInput'
import RoomInput from '../components/rooms/RoomInput'
import { connect } from 'react-redux';
import { addHome} from '../actions/houseActions';
import {removeHome} from '../actions/houseActions';
import {addRoom} from '../actions/roomActions'



class HomesContainer extends Component {

  render(){

    return(
      <div>
      <Homes houses={this.props.houses} deleteHome={this.props.removeHome}/>
      <HomeInput addHome={this.props.addHome} />
      <RoomInput addRoom={this.props.addRoom}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.houses})


export default connect(mapStateToProps, {removeHome, addHome, addRoom}) (HomesContainer)
