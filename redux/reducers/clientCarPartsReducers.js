import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const clientAddCarReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filters: filtersReducerFor('CLIENT_CAR_PARTS_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default clientAddCarReducers;
