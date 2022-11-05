import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './slice';

export const store = configureStore({
  reducer: phoneBookSlice.reducer,
  devTools: true,
});
