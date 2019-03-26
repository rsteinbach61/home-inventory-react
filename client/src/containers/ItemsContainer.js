import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput'
import Items from '../components/items/Items';
import { connect } from 'react-redux';
import { getItem} from '../actions/itemActions';
import { addItem} from '../actions/itemActions';
import { removeItem} from '../actions/itemActions';
import { getSingleItem} from '../actions/itemActions';
import { bindActionCreators } from 'redux';

class ItemsContainer extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id)
  }
  render(){
    const {items, rooms} = this.props;
    let room = rooms.filter(room => room.id === parseInt(this.props.match.params.id))

    return(
      <div>ItemsContainer
        <ItemInput addItem={this.props.addItem} roomId={room[0].id}/>
        <Items rooms={rooms} room={room[0]} items={items} removeItem={this.props.removeItem}/>
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
      ...bindActionCreators({getItem, addItem, getSingleItem, removeItem}, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps ) (ItemsContainer)
