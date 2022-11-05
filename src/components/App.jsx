import React from 'react';

import css from './ContactForm/ContactForm.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};
