import React from "react";

import "./Pagination.css";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <uL className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a
              onClick={() => props.paginate(page)}
              href="!#"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </uL>
    </nav>
  );
};

export default Pagination;
