import React from 'react';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import css from './ContactForm/ContactForm.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contactList'));
    if (parsedContacts) setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    setContacts(prevContacts => {
      if (prevContacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return prevContacts;
      } else {
        return [...prevContacts, { name, number, id: nanoid() }];
      }
    });
  };

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  const handleRemoveContact = evt => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => evt.target.id !== contact.id);
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <Filter filter={filter} onInputChange={handleFilter} />
      <h2>Contacts</h2>
      <ContactList
        onRemove={handleRemoveContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
};
