import React from 'react';

const Search = ({ setSearchValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="search a specific food"
        onChange={(evt) => setSearchValue(evt.target.value)}
      />
    </>
  );
};

export default Search;
