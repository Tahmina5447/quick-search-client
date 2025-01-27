import React from "react";

const SearchInput = ({ title,placeholder, setValue }) => {
  return (
    <div>
      <p className="text-sm font-medium text-black/60 mb-0.5">{title}</p>
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none border rounded text-xs text-black/60 py-1 px-2 min-w-52 "
      />
    </div>
  );
};

export default SearchInput;
