import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          // className={css.searchFormInput}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Searchbar;
