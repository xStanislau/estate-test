import React, { useState } from "react";
import { Pagination as BsPagination } from "react-bootstrap";
import constants from "../../constants/";

const Pagination = ({
  total: totalItems,
  fetch,
  pathname,
  path,
  filterParams
}) => {
  const itemPerPage = 32;
  let [currentPageIndex, setstate] = useState(0);
  const totalPages = totalItems && Math.ceil(totalItems / itemPerPage);
  const lastPageNumber = totalPages;
  let offsetFromEnd = totalPages - 2;
  const offSetFromCurrentRight = 1;
  let offSetFromCurrentLeft = 2 + currentPageIndex;
  let offsetStartIndex = 0;

  if (currentPageIndex >= 2) {
    offsetStartIndex = currentPageIndex - offSetFromCurrentRight;
  }

  if (currentPageIndex >= lastPageNumber - 3) {
    offSetFromCurrentLeft = offsetFromEnd;
    offsetStartIndex = offsetStartIndex - 1;
    if (currentPageIndex >= lastPageNumber) {
      offsetFromEnd = totalPages;
    }
  }

  const Items = new Array(totalPages).fill(0).map((page, index, arr) => {
    return (
      <BsPagination.Item
        key={index}
        onClick={() => {
          const {
            queryOptions: { pagination },
            queryOptions
          } = constants;

          const currentItemsOffset = index * itemPerPage;

          let queryParams = [
            { ...pagination, value: currentItemsOffset },
            ...queryOptions[pathname.slice(1, pathname.length)]
          ];

          if (filterParams && filterParams.length > 0) {
            queryParams = [...queryParams, ...filterParams];
          }
          fetch(path, queryParams);
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
          fetch(path);
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
          fetch();
          setstate(lastPageOffset);
        }}
      />
    </BsPagination>
  );
};

export default Pagination;
