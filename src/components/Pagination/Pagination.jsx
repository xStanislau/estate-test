import React, { useEffect } from "react";
import { Pagination as BsPagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";

const Pagination = ({ total: totalItems }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <BsPagination>
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
      <BsPagination.Last />
    </BsPagination>
  );
};

export default connect(
  mapStateToProps,
  { fetch }
)(Sales);
