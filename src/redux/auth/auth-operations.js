import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from 'helpers/status';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const authInitialState = {
  status: Status.init,
  access_token: '',
  error: '',
  isAuthenticated: false,
  user: {
    name: 'Unknown user',
    email: '',
  },
};

export const registrationOperation = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);

      return data;
    } catch (err) {}
  }
);

export const loginOperation = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);

      return data;
    } catch (err) {}
  }
);

export const logoutOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (err) {}
  }
);

export const currentUserOperation = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      token.set(state.auth.access_token);
      const { data } = await axios.get('/users/current');

      return data;
    } catch (err) {}
  }
);
