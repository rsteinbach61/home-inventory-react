import React, { Component } from 'react'
import Homes from '../components/homes/Homes';
import HomeInput from '../components/homes/HomeInput'

import { connect } from 'react-redux';
import { addHome} from '../actions/houseActions';
import {removeHome} from '../actions/houseActions';
import {addRoom} from '../actions/roomActions'
import { loadHouses} from '../actions/houseActions';


class HomesContainer extends Component {
  componentDidMount() {

    this.props.loadHouses()
  }

  render(){

    return(
      <div>
      <Homes houses={this.props.houses} deleteHome={this.props.removeHome}/>
      <HomeInput addHome={this.props.addHome} />

      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.homes.houses})


export default connect(mapStateToProps, {removeHome, addHome, addRoom, loadHouses}) (HomesContainer)
