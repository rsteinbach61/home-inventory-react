import React, { Component } from 'react'
import Homes from '../components/homes/Homes';
import HomeInput from '../components/homes/HomeInput'
import { connect } from 'react-redux';
import { addHome} from '../actions/houseActions';





class HomesContainer extends Component {

  render(){

debugger;
    return(
      <div>
      <Homes houses={this.props.houses}/>
      <HomeInput addHome={this.props.addHome} />
      </div>
    )
  }
}
const mapStateToProps = state => ({houses: state.houses})

//const mapDispatchToProps = dispatch => ({
  //addHome: text =>
  //dispatch({type: 'ADD_HOME', text})
//})

export default connect(mapStateToProps, {addHome}) (HomesContainer)
