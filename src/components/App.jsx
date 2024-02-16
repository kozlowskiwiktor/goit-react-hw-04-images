import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';

export const App = ({ query }) => {
  const [inputValue, setInputValue] = useState('');

  const resetState = () => {
    setInputValue('');
  };

  const handleInputValue = query => {
    if (inputValue === query) {
      return;
    }
    resetState();

    setInputValue(query);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onInputValue={handleInputValue} />
    </div>
  );
};
