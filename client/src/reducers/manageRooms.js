import { POST_ROOM_SUCCESS, GET_ROOMS_SUCCESS } from '../actions/types';

const initialState = {
  houses: [],
  house: [],
  rooms: [],
  room: [],
}

export default function manageRooms(state = {initialState}, action) {

  switch (action.type) {
    case POST_ROOM_SUCCESS:
      return {rooms: action.rooms}

    case GET_ROOMS_SUCCESS:
    debugger;
      return {
        ...state,
        rooms: action.rooms,
        homes: action.houses
      }
    default: return initialState;
  }
  }
