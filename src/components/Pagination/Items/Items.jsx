import React from "react";
import { Pagination as BsPagination } from "react-bootstrap";

const Items = (totalPages, onClick, currentPageIndex) => {
  return new Array(totalPages).fill(null).map((page, index, arr) => {
    return (
      <BsPagination.Item
        key={index}
        onClick={onClick(index)}
        active={currentPageIndex === index}
      >
        {index + 1}
      </BsPagination.Item>
    );
  });
};

export default Items;
