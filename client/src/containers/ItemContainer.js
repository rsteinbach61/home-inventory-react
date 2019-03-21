import React, { Component } from 'react';
import { getSingleItem} from '../actions/itemActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Item from '../components/items/Item'

class ItemContainer extends Component {

   componentDidMount() {
     this.props.getSingleItem(this.props.match.params.id)
   }

render(){

debugger;
  return(
    <div>
      <Item item={this.props.items}/>
    </div>

  )
}
}
const mapStateToProps = state => (

  {houses: state.homes.houses,
    rooms: state.homes.rooms,
     room: state.rooms.room,
     items: state.homes.items
   })

  //const mapDispatchToProps = {getItem, addItem}

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({getSingleItem}, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps ) (ItemContainer)
