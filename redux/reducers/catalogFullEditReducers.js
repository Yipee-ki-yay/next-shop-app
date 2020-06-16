import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import modalReducerFor from './common/modalReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const catalogFullEditReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  modals: modalReducerFor('CATALOG_FULL_EDIT_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default catalogFullEditReducers;
