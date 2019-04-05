import { GET_HOUSES_SUCCESS, POST_HOME_SUCCESS, REMOVE_HOME_SUCCESS, GET_ITEMS_SUCCESS, POST_ITEM_SUCCESS, GET_SINGLE_ITEM_SUCCESS, REMOVE_ROOM_SUCCESS, DELETE_ITEM_SUCCESS, GET_ROOMS_SUCCESS, POST_ROOM_SUCCESS } from '../actions/types'

const initialState = {
  houses: [],
  house: [],
  item: [],
  items: [],
  rooms: [],
  room: []
}


export default function manageHouses(state = {initialState}, action) {

  switch (action.type) {
    case GET_HOUSES_SUCCESS:

      return { ...state, houses: action.houses }


    case POST_HOME_SUCCESS:

    return{
      ...state,
      houses:[
      ...state.houses, action.home
    ]}

    case REMOVE_HOME_SUCCESS:
    return{
      ...state,
      houses: action.homes

    }

     case GET_ROOMS_SUCCESS:
       return { ...state, rooms: action.rooms }

    case GET_ITEMS_SUCCESS:

      return { ...state, items: action.items}

        case POST_ROOM_SUCCESS:
         debugger;
          return { ...state, rooms: [ ...state.rooms, action.room ] }

      case POST_ITEM_SUCCESS:

          return { ...state, items: [ ...state.items, action.item] }

      case GET_SINGLE_ITEM_SUCCESS:

        return{...state, item: action.item}

        case REMOVE_ROOM_SUCCESS:
        return{
          ...state,
          rooms: action.rooms
        }

        case DELETE_ITEM_SUCCESS:
          return{
            ...state,
            items: action.items
          }

    default: return initialState;

  }
}
