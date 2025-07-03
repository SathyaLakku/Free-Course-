import React from "react";

function FilterBar({ domains, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: "0.75em 1em",
        fontSize: "1em",
        borderRadius: 6,
        border: "1px solid #ddd"
      }}
    >
      {domains.map(domain => (
        <option key={domain} value={domain}>
          {domain}
        </option>
      ))}
    </select>
  );
}

export default FilterBar;