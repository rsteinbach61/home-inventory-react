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

export default ItemsContainer
