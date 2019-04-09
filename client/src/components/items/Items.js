import React, { Component} from 'react'
import Itemlist from './Itemlist';

class Items extends Component {
  render(){

    let list = []
    if(this.props.items){
         list = this.props.items.map(item => {
           return(
             <Itemlist key={item.id} item={item}
               removeItem={this.props.removeItem}/>
           )
         })
        }
    return(
      <div id="item_list">
        <br></br>
        <table >
          <tr>
            <th>{this.props.room.name} Items:</th>
          </tr>
           {list} 
        </table>
      </div>
    )
  }
}
export default Items
