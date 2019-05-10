import React, { Component } from 'react';
import { getSingleItem} from '../actions/itemActions';
import { addItem } from '../actions/itemActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemEdit from '../components/items/ItemEdit'

class ItemEditContainer extends Component {

   componentDidMount() {

     this.props.getSingleItem(this.props.match.params.id)
   }

render(){


  return(
    <div>
      <ItemEdit item={this.props.item} addItem={this.props.addItem}/>
    </div>

  )
}
}
const mapStateToProps = state => (

  {houses: state.homes.houses,
    rooms: state.homes.rooms,
     room: state.homes.room,
     items: state.homes.items,
     item: state.homes.item
   })

  //const mapDispatchToProps = {getItem, addItem}

  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({getSingleItem, addItem}, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps ) (ItemEditContainer)
