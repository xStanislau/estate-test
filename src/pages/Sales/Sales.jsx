import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SalesItems from "../SaleItems/SaleItems";
import { fetch } from "../../redux/reducers/sales";
import Pagination from "../../components/Pagination/Pagination";

const Sales = ({ title, items, pagination, fetch, isLoaded }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
      <h1>{title}</h1>
      {isLoaded && (
        <>
          <SalesItems items={items} />
          <Pagination {...pagination} fetch={fetch} />
        </>
      )}
    </>
  );
};

Sales.defaultProps = {
  items: []
};

Sales.propTypes = {};

const mapStateToProps = state => {
  return {
    items: state.sales.data.items,
    pagination: state.sales.data.pagination,
    isLoaded: state.sales.isLoaded
  };
};

export default connect(
  mapStateToProps,
  { fetch }
)(Sales);
