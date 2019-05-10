import { combineReducers} from 'redux';
import manageHouses from './manageHouses';
import manageRooms from './manageRooms';

const rootReducer =  combineReducers({
  homes: manageHouses,
  rooms: manageRooms
});
export default rootReducer
