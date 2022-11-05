import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { removeContactAction } from 'redux/slice';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleRemoveContact = evt => {
    dispatch(removeContactAction(evt.target.id));
  };

  return (
    <ul className={css.contactList}>
      {contacts?.length > 0 &&
        contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <span className={css.name}>{contact.name}: </span>
                <span className={css.number}>{contact.number}</span>
                <button
                  onClick={handleRemoveContact}
                  id={contact.id}
                  className={css.button}
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
    </ul>
  );
};
