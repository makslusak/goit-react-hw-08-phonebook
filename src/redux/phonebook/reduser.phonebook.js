import { initialState } from '../store';
import {
  ADD_CONTACT,
  FILTER_CONTACT,
  FROM_STORAGE,
  REMOVE_CONTACT,
} from './constants.phonebook';

export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => action.payload !== contact.id),
        ],
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filter: action.payload,
      };
    case FROM_STORAGE:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
