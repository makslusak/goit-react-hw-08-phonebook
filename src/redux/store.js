import { createStore } from 'redux';
import { reduser } from './phonebook/reduser.phonebook';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const initialState = {
  contacts: [],
  filter: '',
};

export const store = createStore(reduser, enhancer);
