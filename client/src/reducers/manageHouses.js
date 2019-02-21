import { GET_HOUSES_SUCCESS, POST_HOME_SUCCESS, REMOVE_HOME_SUCCESS } from '../actions/types'

const initialState = {
  houses: [],
  house: []
}


export default function manageHouses(state = {initialState}, action) {

  switch (action.type) {
    case GET_HOUSES_SUCCESS:

      return {houses: action.houses}


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

    default: return initialState;

  }
}
