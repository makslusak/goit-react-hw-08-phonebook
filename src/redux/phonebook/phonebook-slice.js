import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContacts,
} from './phonebook-operations';

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
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [removeContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [removeContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [removeContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterContact } = phoneBookSlice.actions;
export const contactReducer = phoneBookSlice.reducer;
