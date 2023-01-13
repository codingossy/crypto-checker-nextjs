import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div className="my-5">
      <input
      className="outline-none p-2 rounded-sm text-black"
        type="text"
        placeholder="search for coin"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
