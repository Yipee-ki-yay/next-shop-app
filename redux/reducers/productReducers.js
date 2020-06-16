import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import modalReducerFor from './common/modalReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const productReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  modals: modalReducerFor('PRODUCT_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default productReducers;
