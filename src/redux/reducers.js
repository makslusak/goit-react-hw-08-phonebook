import { combineReducers } from 'redux';
import { authReducer } from './auth/auth-slice';
import { contactReducer } from './slice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});
