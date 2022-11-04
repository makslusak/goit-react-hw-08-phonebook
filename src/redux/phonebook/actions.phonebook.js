import {
  ADD_CONTACT,
  FILTER_CONTACT,
  FROM_STORAGE,
  REMOVE_CONTACT,
} from './constants.phonebook';

export const addContactAction = (name, number, id) => {
  return {
    type: ADD_CONTACT,
    payload: {
      name,
      number,
      id,
    },
  };
};

export const removeContactAction = id => {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
};

export const filterContactAction = value => {
  return {
    type: FILTER_CONTACT,
    payload: value,
  };
};

export const fromLocalStorage = contacts => {
  return {
    type: FROM_STORAGE,
    payload: contacts,
  };
};
