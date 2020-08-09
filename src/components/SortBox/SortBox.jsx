import React from "react";

const SortBox = ({ sortLink, defaultSorting }) => {
  const handleChange = (e) => {
    sortLink(e.target.value);
  };

  return (
    <select
      value={defaultSorting}
      id="sort-links"
      onChange={(e) => handleChange(e)}
      className="custom-select"
      data-test="component-sort-box"
    >
      <option value="0">Order by</option>
      <option value="1">Order by Most Voted</option>
      <option value="2">Order by Least Voted</option>
    </select>
  );
};

export default SortBox;
