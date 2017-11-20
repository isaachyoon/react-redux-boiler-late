import { combineReducers } from 'redux';
import ClientReducer from './HeaderReducer';


export default combineReducers({
  client: ClientReducer
});