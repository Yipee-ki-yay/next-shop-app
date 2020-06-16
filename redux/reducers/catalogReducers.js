import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const catalogReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filters: filtersReducerFor('CATALOG_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default catalogReducers;
