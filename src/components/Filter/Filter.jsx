import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/phonebook/phonebook-slice';
import { selectFilter } from 'redux/phonebook/phonebook-selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <>
      <h3 className={css.title}>Contact search</h3>
      <input
        onChange={handleFilter}
        className={css.input}
        type="text"
        value={filter}
        name="filter"
      />
    </>
  );
};
