import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'helpers/status';
import {
  authInitialState,
  currentUserOperation,
  loginOperation,
  logoutOperation,
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
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
      state.isAuthenticated = true;
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
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
      state.isAuthenticated = true;
      alert('Login was successful');
    },
    [loginOperation.rejected](state, action) {
      state.status = Status.error;
      state.error = action.payload;
      alert('Login error');
    },
    [logoutOperation.pending](state) {
      state.status = Status.loading;
    },
    [logoutOperation.fulfilled](state, action) {
      state.access_token = '';
      state.user.email = '';
      state.user.name = 'Unknown user';
      state.isAuthenticated = false;
    },
    [logoutOperation.rejected](state, action) {
      state.status = Status.error;
      state.error = action.payload;
    },
    [currentUserOperation.pending](state) {
      state.status = Status.loading;
    },
    [currentUserOperation.fulfilled](state, action) {
      state.status = Status.success;
      state.user.email = action.payload?.email;
      state.user.name = action.payload.name;
      state.isAuthenticated = true;
    },
    [currentUserOperation.rejected](state, action) {
      state.status = Status.error;
      state.error = action.payload;
    },
  },
});
export const authReducer = authSlice.reducer;
