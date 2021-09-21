import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onTermSubmit(term);
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={onFormSubmit}>
        <label htmlFor="">Video Search</label>
        <input
          type="text"
          className="searchbar__input-field"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
