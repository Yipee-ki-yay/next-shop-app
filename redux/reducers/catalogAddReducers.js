import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
// import statusReducerFor from './common/statusReducerFor';
import stepsReducerFor from './common/stepsReducerFor';
import { CATALOG_ADD_MANUFACTURER_ } from 'redux/constants'
import { CATALOG_ADD_MODEL_ } from 'redux/constants'
import { CATALOG_ADD_MODIFICATION_ } from 'redux/constants'

const catalogAddReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  filtersManufacturer: filtersReducerFor(CATALOG_ADD_MANUFACTURER_),
  filtersModel: filtersReducerFor(CATALOG_ADD_MODEL_),
  filtersModification: filtersReducerFor(CATALOG_ADD_MODIFICATION_),
  // usersStatus: statusReducerFor('USERS_'),
  stepsManufacturer: stepsReducerFor(CATALOG_ADD_MANUFACTURER_),
  stepsModel: stepsReducerFor(CATALOG_ADD_MODEL_),
  stepsModification: stepsReducerFor(CATALOG_ADD_MODIFICATION_),
});

export default catalogAddReducers;
