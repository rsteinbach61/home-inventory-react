import { POST_ROOM_SUCCESS } from '../actions/types';

const initialState = {
  rooms: [],
  room: []
}

export default function manageRooms(state = {initialState}, action) {
  debugger;
  switch (action.type) {
    case POST_ROOM_SUCCESS:

      return {rooms: action.rooms}

    default: return initialState;

  }
  }
