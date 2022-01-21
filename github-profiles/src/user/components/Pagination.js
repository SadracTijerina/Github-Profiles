import React from "react";

import "./Pagination.css";

import Button from "../../shared/components/FormElements/Button";

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
            <Button size="xs" onClick={() => props.paginate(page)}>
              {page}
            </Button>
          </li>
        ))}
      </uL>
    </nav>
  );
};

export default Pagination;
