import { combineReducers } from 'redux';
import authDataReducer from './auth/authDataReducer';
import statusReducerFor from './common/statusReducerFor';

const authReducers = combineReducers({
  authData: authDataReducer,
  authStatus: statusReducerFor('AUTH_'),
});

export default authReducers;
