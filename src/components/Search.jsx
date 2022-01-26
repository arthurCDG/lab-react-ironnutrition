import React from 'react';

const Search = ({setSearchValue}) => {
  return (
    <>
        <input type="text" onChange={(evt) => setSearchValue(evt.target.value)}/>
    </>
  );
};

export default Search;
