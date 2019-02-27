import { POST_ROOM_SUCCESS, GET_ROOMS_SUCCESS } from '../actions/types';

const initialState = {
  rooms: [],
  room: []
}

export default function manageRooms(state = {initialState}, action) {
debugger;
  switch (action.type) {
    case POST_ROOM_SUCCESS:
      return {rooms: action.rooms}

    case GET_ROOMS_SUCCESS:
      return {rooms: action.rooms}

    default: return initialState;

  }
  }
