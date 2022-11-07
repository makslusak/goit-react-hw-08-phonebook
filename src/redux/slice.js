import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    fetchContactInProgress: (state, action) => {
      state.contacts.isLoading = true;
    },
    fetchContactSuccess: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    fetchContactError: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    addContactInProgress: (state, action) => {
      state.contacts.isLoading = true;
    },
    addContactSuccess: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    addContactError: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    removeContactInProgress: (state, action) => {
      state.contacts.isLoading = true;
    },
    removeContactSuccess: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    removeContactError: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    filterContactAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  fetchContactInProgress,
  fetchContactSuccess,
  fetchContactError,

  addContactInProgress,
  addContactSuccess,
  addContactError,

  removeContactInProgress,
  removeContactSuccess,
  removeContactError,
  filterContactAction,
} = phoneBookSlice.actions;
