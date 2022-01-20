import React from "react";

const Pagination = () => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <uL className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a href="" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </uL>
    </nav>
  );
};

export default Pagination;
