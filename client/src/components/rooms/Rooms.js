import React, { Component } from 'react';

class Rooms extends Component {


  componentDidMount() {

  //   let list = rooms.map(room => {
  //     return(
  //     room.name
  //     )
  //   })
   }

render() {
  debugger;
  const rooms = this.props.getRoom(this.props.house.id, this.props.houses);
  let list = [];
   rooms.then(rooms => {

     list = rooms.map(room => {
       return room.name;
     })
     return list
   })

  return(
    <div>
      Rooms
      {list[0]}

    </div>
  )
}
}
export default Rooms
