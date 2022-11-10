import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from 'helpers/status';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
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
  token_type: '',
  error: '',
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
