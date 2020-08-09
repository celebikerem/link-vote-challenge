import React from "react";

import "./Pagination.css";

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav data-test="component-pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={"page-item" + (currentPage === number ? " active" : "")}
          >
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
