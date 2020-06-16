import { combineReducers } from 'redux';
import itemsDataReducerFor from './common/itemsDataReducerFor';
import filtersReducerFor from './common/filtersReducerFor';
import statusReducerFor from './common/statusReducerFor';
import modalReducerFor from './common/modalReducerFor';


const managersReducers = combineReducers({
  // managersData: managersDataReducer,
  managersData: itemsDataReducerFor('MANAGERS_'),
  filters: filtersReducerFor('MANAGERS_'),
  managersStatus: statusReducerFor('MANAGERS_'),
  modals: modalReducerFor('MANAGERS_'),
});

export default managersReducers;
