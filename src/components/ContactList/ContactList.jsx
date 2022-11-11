import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

import { useEffect } from 'react';
import {
  fetchContacts,
  removeContacts,
} from 'redux/phonebook/phonebook-operations';
import {
  selectContacts,
  selectFilter,
  selectItems,
} from 'redux/phonebook/phonebook-selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filtered = useSelector(selectFilter);
  const { isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectItems);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = evt => {
    dispatch(removeContacts(evt.target.id));
  };

  return (
    <>
      {isLoading && <p className={css.name}>Loading contacts...</p>}
      {error && <p className={css.number}>{error}</p>}
      <ul className={css.contactList}>
        {items?.length > 0 &&
          items
            .filter(contact =>
              contact?.name.toLowerCase().includes(filtered?.toLowerCase())
            )
            .map(contact => {
              return (
                <li className={css.item} key={contact.id}>
                  <span className={css.name}>{contact.name}: </span>
                  <a className={css.number} href={`tel:${contact.number}`}>
                    {contact.number}
                  </a>
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
    </>
  );
};
