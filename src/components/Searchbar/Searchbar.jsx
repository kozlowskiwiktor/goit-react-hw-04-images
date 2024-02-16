import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({ onInputValue, onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const newQuery = e.currentTarget.value.toLowerCase();
    setQuery(newQuery);
    onInputValue(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.searchFormInput}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className={css.searchFormButton}>
          Search
        </button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
