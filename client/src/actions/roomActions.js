export function postRoomSuccess(room){
  return {type: "POST_ROOM_SUCCESS", room}
}

export function getRoomsSuccess(rooms, houses){
  return {type: "GET_ROOMS_SUCCESS", rooms, houses}
}

async function postRoom(data){
  const url = '/api/createroom.json';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const fetchResult = fetch(url, settings);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

async function getRooms(id){
  const url = `/api/home/${id}/rooms.json`
  const fetchResult = fetch(url);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

export function addRoom(data) {
  return function(dispatch) {
    return postRoom(data).then(room =>{
      if (room.status){
          alert(`Status: ${room.status}, ${room.error}`)
    } else {
      dispatch(postRoomSuccess(room))
    }
    })
  }
}

export function getRoom(id, houses) {
  return function(dispatch) {
    return getRooms(id).then(rooms =>{
      if (rooms.status){
        alert(`Status: ${rooms.status}, ${rooms.error}`)

      }else {
        dispatch(getRoomsSuccess(rooms, houses))

      }
    })
  }
}
