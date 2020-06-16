import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const catalogFullReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filters: filtersReducerFor('CATALOG_FULL_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default catalogFullReducers;
