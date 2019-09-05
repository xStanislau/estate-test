import React, { useState } from "react";
import { Pagination as BsPagination } from "react-bootstrap";
import constants from "../../constants/";

const Pagination = ({ total: totalItems, fetch, pathname }) => {
  const itemPerPage = 32;
  let [currentPageIndex, setstate] = useState(0);
  const totalPages = totalItems && Math.ceil(totalItems / itemPerPage);
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
          const {
            queryOptions: { pagination },
            queryOptions
          } = constants;
          const currentItemsOffset = index * 32;

          const query = [
            { ...pagination, value: currentItemsOffset },
            ...queryOptions[pathname.slice(1, pathname.length)]
          ];

          fetch(query);
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
        Items.slice(offsetFromEnd, lastPageIndex)
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
