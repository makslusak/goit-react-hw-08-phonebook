import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    addContactAction: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContactAction: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(contact => action.payload !== contact.id),
      ];
    },
    filterContactAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContactAction, removeContactAction, filterContactAction } =
  phoneBookSlice.actions;
