import React, { Component } from 'react';
import { getSingleItem} from '../actions/itemActions';
import { updateItem } from '../actions/itemActions';
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
      <ItemEdit item={this.props.item} updateItem={this.props.updateItem}/>
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
      ...bindActionCreators({getSingleItem, updateItem}, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps ) (ItemEditContainer)
