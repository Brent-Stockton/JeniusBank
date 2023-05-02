import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="pa2"
        type="search"
        placeholder="Search Staff"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
