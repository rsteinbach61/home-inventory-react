import { GET_HOUSES_SUCCESS, POST_HOME_SUCCESS, REMOVE_HOME_SUCCESS, GET_ROOMS_SUCCESS } from '../actions/types'

const initialState = {
  houses: [],
  house: [],

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

    default: return initialState;

  }
}
