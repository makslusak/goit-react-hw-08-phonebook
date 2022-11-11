import { combineReducers } from 'redux';
import { authReducer } from './auth/auth-slice';
import { contactReducer } from './phonebook/phonebook-slice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});
