import React, { Component } from 'react';

class Rooms extends Component {

render() {
  let list = []
  if(this.props.rooms){
       list = this.props.rooms.map(room => {
         return(
         `<li>${room.name}</li>`
         )
       })
      }
debugger;
  return(
    <div>
      Rooms
<ul>{list}</ul>

    </div>
  )
}
}
export default Rooms
