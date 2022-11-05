import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'redux/slice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(filterContactAction(evt.target.value));
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
