import { combineReducers } from 'redux';
// import itemsDataReducerFor from './common/itemsDataReducerFor';
import imagesPreviewerReducerFor from './common/imagesPreviewerReducerFor';
// import statusReducerFor from './common/statusReducerFor';

const clientsReducers = combineReducers({
  // usersData: itemsDataReducerFor('USERS_'),
  imagesPreviewer: imagesPreviewerReducerFor('PRODUCT_EDIT_'),
  // usersStatus: statusReducerFor('USERS_'),
});

export default clientsReducers;
