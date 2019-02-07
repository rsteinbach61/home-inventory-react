import { combineReducers} from 'redux';
import manageHouses from './manageHouses'

export default combineReducers({
  homes: manageHouses
});
