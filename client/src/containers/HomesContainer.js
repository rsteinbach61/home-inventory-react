import React, { Component } from 'react'
import Homes from '../components/homes/Homes';
import HomeInput from '../components/homes/HomeInput'
import { connect } from 'react-redux';
import { addHome} from '../actions/houseActions';
import {removeHome} from '../actions/houseActions';




class HomesContainer extends Component {

  render(){

debugger;
    return(
      <div>
      <Homes houses={this.props.houses} deleteHome={this.props.removeHome}/>
      <HomeInput addHome={this.props.addHome} />
      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.houses})


export default connect(mapStateToProps, {removeHome, addHome}) (HomesContainer)
