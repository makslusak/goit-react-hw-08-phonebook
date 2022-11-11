import React from 'react';
import { useState } from 'react';

import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/phonebook-operations';
import { selectItems } from 'redux/phonebook/phonebook-selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const fields = {
    name: setName,
    number: setNumber,
  };

  const handleInputChange = evt => {
    const { name } = evt.target;
    fields[name](prev => (prev = evt.target.value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // if (contacts.some(contact => contact.name.includes(name))) {
    //   alert(`${name} is already in contacts`);
    // } else {
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    // }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        placeholder="Jack Daniels"
        onChange={handleInputChange}
        className={css.input}
        type="text"
        value={name}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input
        onChange={handleInputChange}
        placeholder="230-23-23"
        className={css.input}
        type="tel"
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
