import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SalesItems from "../SaleItems/SaleItems";

const Sales = ({ title, items }) => {
  return (
    <>
      <h1>{title}</h1>
      <SalesItems items={items} />
    </>
  );
};

Sales.defaultProps = {};
Sales.propTypes = {};

export default connect()(Sales);
