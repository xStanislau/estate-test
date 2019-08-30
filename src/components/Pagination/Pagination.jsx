import React, { useState } from "react";
import { Pagination as BsPagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";

const Pagination = ({ total: totalItems, fetch }) => {
  const itemPerPage = 32;
  let [currentPageIndex, setstate] = useState(0);
  const totalPages = Math.ceil(totalItems / itemPerPage);
  const lastPageIndex = totalPages;
  const offsetFromEnd = totalPages - 3;
  const offSetFromCurrentLeft = 3 + currentPageIndex;
  const offSetFromCurrentRight = 2;
  let offsetStartIndex;
  if (currentPageIndex > 3) {
    offsetStartIndex = currentPageIndex - offSetFromCurrentRight;
  }
  if (currentPageIndex >= lastPageIndex - 3) {
    offSetFromCurrentLeft = currentPageIndex;
  }
  const Items = new Array(totalPages).fill(0).map((page, index) => {
    return (
      <BsPagination.Item
        key={index}
        onClick={() => {
          fetch(index);
          setstate(index);
        }}
      >
        {index}
      </BsPagination.Item>
    );
  });
  debugger;
  return (
    <BsPagination>
      {[
        Items.slice(offsetStartIndex, offSetFromCurrentLeft),
        <BsPagination.Ellipsis />,
        Items.slice(offsetFromEnd, lastPageIndex)
      ]}
      {/*       
      <BsPagination.First />
      <BsPagination.Prev />
      <BsPagination.Item>{1}</BsPagination.Item>
      <BsPagination.Ellipsis />
      <BsPagination.Item>{10}</BsPagination.Item>
      <BsPagination.Item>{11}</BsPagination.Item>
      <BsPagination.Item active>{12}</BsPagination.Item>
      <BsPagination.Item>{13}</BsPagination.Item>
      <BsPagination.Item disabled>{14}</BsPagination.Item>
      <BsPagination.Item>{20}</BsPagination.Item>
      <BsPagination.Next />
      <BsPagination.Last /> */}
    </BsPagination>
  );
};

export default Pagination;
