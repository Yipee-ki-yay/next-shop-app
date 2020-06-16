import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const clientsReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filters: filtersReducerFor('CLIENTS_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default clientsReducers;
