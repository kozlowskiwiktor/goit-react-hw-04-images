import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const inputRef = useRef();
  const [query, setQuery] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = e => {
    const newQuery = e.currentTarget.value.toLowerCase();
    setQuery(newQuery);
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
          ref={inputRef}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button
          type="submit"
          className={css.searchFormButton}
          onClick={handleFocus}
        >
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
