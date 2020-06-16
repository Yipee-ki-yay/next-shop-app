import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
// import statusReducerFor from './common/statusReducerFor';
import stepsReducerFor from './common/stepsReducerFor';
import { CATALOG_FULL_ADD_GROUP_ } from 'redux/constants'

const catalogFullAddGroupReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  // usersStatus: statusReducerFor('USERS_'),
  steps: stepsReducerFor(CATALOG_FULL_ADD_GROUP_),
});

export default catalogFullAddGroupReducers;
