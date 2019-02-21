import { combineReducers} from 'redux';
import manageHouses from './manageHouses';
import manageRooms from './manageRooms';

export default combineReducers({
  homes: manageHouses,
  rooms: manageRooms
});
