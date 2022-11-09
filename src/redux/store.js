import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { contactReducer } from './slice';

export const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: contactReducer,
  devTools: true,
});
