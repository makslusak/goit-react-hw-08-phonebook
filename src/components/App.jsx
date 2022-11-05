import React from 'react';
import { useEffect } from 'react';
import css from './ContactForm/ContactForm.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contactList'));
  //   // dispatch(fromLocalStorage(parsedContacts));
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contactList', JSON.stringify(contacts));
  // }, [contacts]);

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
