import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import modalReducerFor from './common/modalReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const clientReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  modals: modalReducerFor('CLIENT_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default clientReducers;
