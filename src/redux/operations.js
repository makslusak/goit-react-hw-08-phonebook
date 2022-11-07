import axios from 'axios';
import {
  fetchContactInProgress,
  fetchContactSuccess,
  fetchContactError,
  addContactInProgress,
  addContactSuccess,
  addContactError,
  removeContactInProgress,
  removeContactSuccess,
  removeContactError,
} from './slice.js';

axios.defaults.baseURL = 'https://6369188c28cd16bba714d5fd.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchContactInProgress());

    const response = await axios.get('/contacts/');

    dispatch(fetchContactSuccess(response.data));
  } catch (err) {
    dispatch(fetchContactError(err.message));
  }
};

export const addContacts = contact => async dispatch => {
  try {
    dispatch(addContactInProgress());

    const response = await axios.post('/contacts/', contact);
    dispatch(addContactSuccess(response.data));
    dispatch(fetchContacts());
  } catch (err) {
    dispatch(addContactError(err.message));
  }
};

export const removeContacts = id => async dispatch => {
  try {
    dispatch(removeContactInProgress());

    const response = await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(response.data));
    dispatch(fetchContacts());
  } catch (err) {
    dispatch(removeContactError(err.message));
  }
};
