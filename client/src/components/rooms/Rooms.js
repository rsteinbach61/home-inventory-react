import React, { Component } from 'react';
import Roomlist from './Roomlist'
class Rooms extends Component {

render() {
  //const {removeRoom} = this.props
  let list = []
  if(this.props.rooms){
       list = this.props.rooms.map(room => {
         return(
           <Roomlist key={room.id} room={room} removeRoom={this.props.removeRoom}/>
         )
       })
      }

  return(
    <div>
      Rooms
<ul>
  {list}
  </ul>

    </div>
  )
}
}
export default Rooms

//deleteHome={deleteRoom}
