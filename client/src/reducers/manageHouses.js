import { GET_HOUSES_SUCCESS, POST_HOME_SUCCESS } from '../actions/types'

const initialState = {
  houses: [],
  house: []
}


export default function manageHouses(state = {initialState}, action) {
  debugger;
  switch (action.type) {
    case GET_HOUSES_SUCCESS:

      return {houses: action.houses}


    case POST_HOME_SUCCESS:
    debugger;
    return{
      ...state,
      houses:[
      ...state.houses, action.home
    ]}

    default: return initialState;

  }
}
