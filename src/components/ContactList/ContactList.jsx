import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';

import { useEffect } from 'react';
import { fetchContacts, removeContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

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
              contact?.name?.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li className={css.item} key={contact.id}>
                  <span className={css.name}>{contact.name}: </span>
                  <span className={css.number}>{contact.phone}</span>
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
