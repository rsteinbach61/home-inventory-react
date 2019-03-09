import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput'
import Items from '../components/items/Items';
import { connect } from 'react-redux';
import { getItem} from '../actions/itemActions';
import { addItem} from '../actions/itemActions';

class ItemsContainer extends Component {

  render(){
    return(
      <div>Items</div>
    )
  }
}

const mapStateToProps = state => (

  {houses: state.homes.houses, rooms: state.homes.rooms, room: state.rooms.room})

  const mapDispatchToProps = {getItem, addItem,}

export default connect(mapStateToProps, mapDispatchToProps ) (ItemsContainer)
