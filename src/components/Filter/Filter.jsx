import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onInputChange }) => {
  return (
    <>
      <h3 className={css.title}>Contact search</h3>
      <input
        onChange={onInputChange}
        className={css.input}
        type="text"
        value={filter}
        name="filter"
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};
