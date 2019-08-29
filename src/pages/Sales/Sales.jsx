import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SalesItems from "../SaleItems/SaleItems";
import { fetch } from "../../redux/reducers/sales";

const Sales = ({ title, items, fetch }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <h1>{title}</h1>
      <SalesItems items={items} />
    </>
  );
};

Sales.defaultProps = {
  items: []
};

Sales.propTypes = {};

const mapStateToProps = state => {
  return { items: state.sales.data.items };
};

export default connect(
  mapStateToProps,
  { fetch }
)(Sales);
