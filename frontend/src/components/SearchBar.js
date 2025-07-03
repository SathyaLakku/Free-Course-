import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search for courses..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        flex: 1,
        padding: "0.75em 1em",
        fontSize: "1em",
        borderRadius: 6,
        border: "1px solid #ddd",
        outline: "none"
      }}
    />
  );
}

export default SearchBar;