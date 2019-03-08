import { POST_ROOM_SUCCESS } from '../actions/types';

const initialState = {

  rooms: [],
  room: [],
}

export default function manageRooms(state = { initialState }, action) {

  switch (action.type) {
    case POST_ROOM_SUCCESS:
      return { ...state, rooms: [ ...state.rooms, action.room ] }

     // case GET_ROOMS_SUCCESS:
     //   return { ...state, rooms: action.rooms }

    default: return initialState;
  }
}
