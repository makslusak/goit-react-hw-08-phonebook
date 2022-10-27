import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ onRemove, contacts, filter }) => {
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
                  onClick={onRemove}
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
ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};
