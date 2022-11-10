import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'helpers/status';
import {
  authInitialState,
  loginOperation,
  registrationOperation,
} from './auth-operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [registrationOperation.pending](state) {
      state.status = Status.loading;
    },
    [registrationOperation.fulfilled](state, action) {
      state.status = Status.success;
      state.access_token = action.payload.token;
      alert('Registration was successful');
    },
    [registrationOperation.rejected](state, action) {
      state.status = Status.error;
      state.error = action.payload;
      alert('Registration error');
    },

    [loginOperation.pending](state) {
      state.status = Status.loading;
    },
    [loginOperation.fulfilled](state, action) {
      state.status = Status.success;
      state.access_token = action.payload.token;
      alert('Login was successful');
    },
    [loginOperation.rejected](state, action) {
      state.status = Status.error;
      state.error = action.payload;
      alert('Login error');
    },
  },
});
export const authReducer = authSlice.reducer;
