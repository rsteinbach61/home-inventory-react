import React, { Component} from 'react'
import Itemlist from './Itemlist';

class Items extends Component {
  render(){

    let list = []
    if(this.props.items){
         list = this.props.items.map(item => {
           return(
             <Itemlist key={item.id} item={item}/>
           )
         })
        }
    return(
      <div>Room {this.props.room.name} Items:
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
export default Items
