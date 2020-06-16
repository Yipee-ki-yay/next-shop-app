import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';
import stepsReducerFor from './common/stepsReducerFor';
import { CLIENT_ADD_CAR_ } from 'redux/constants'

const clientAddCarReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filters: filtersReducerFor(CLIENT_ADD_CAR_),
  // usersStatus: statusReducerFor('USERS_'),
  steps: stepsReducerFor(CLIENT_ADD_CAR_),
});

export default clientAddCarReducers;
