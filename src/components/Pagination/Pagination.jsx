import React, { useState } from "react";
import { Pagination as BsPagination } from "react-bootstrap";

const Pagination = ({ total: totalItems, fetch }) => {
  const itemPerPage = 32;
  let [currentPageIndex, setstate] = useState(0);
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const lastPageNumber = totalPages;
  let offsetFromEnd = totalPages - 2;
  const offSetFromCurrentRight = 1;
  let offSetFromCurrentLeft = 2 + currentPageIndex;
  let offsetStartIndex;

  if (currentPageIndex > 2) {
    offsetStartIndex = currentPageIndex - offSetFromCurrentRight;
  }

  if (currentPageIndex >= lastPageNumber - 3) {
    offSetFromCurrentLeft = offsetFromEnd;
    offsetStartIndex = offsetStartIndex - 1;
    if (currentPageIndex >= lastPageNumber) {
      offsetFromEnd = totalPages;
    }
  }

  const Items = new Array(totalPages).fill(0).map((page, index) => {
    return (
      <BsPagination.Item
        key={index}
        onClick={() => {
          fetch(index * 32);
          setstate(index);
        }}
        active={currentPageIndex === index}
      >
        {index}
      </BsPagination.Item>
    );
  });

  let lastPageIndex = Items.length - 1;
  let lastPageOffset = lastPageIndex * 32;

  return (
    <BsPagination className="pagination d-flex justify-content-center">
      <BsPagination.First
        onClick={() => {
          fetch();
          setstate(0);
        }}
      />
      {[
        Items.slice(offsetStartIndex, offSetFromCurrentLeft),
        <BsPagination.Ellipsis key={currentPageIndex} />,
        Items.slice(offsetFromEnd, lastPageIndex + 2)
      ]}
      <BsPagination.Last
        onClick={() => {
          fetch(lastPageOffset);
          setstate(lastPageIndex);
        }}
      />
    </BsPagination>
  );
};

export default Pagination;
