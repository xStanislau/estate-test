import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import SalesItems from "./SaleItems/SaleItems";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import "./Sales.scss";

const Sales = ({ items, pagination, fetch, isLoaded }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  const warning = "Нет объектов";

  return (
    <>
      <h1 className="h1 sales__title">Элитная недвижимость в Подмосковье</h1>
      {isLoaded ? (
        <>
          {items.length < 1 ? (
            warning
          ) : (
            <>
              <SalesItems items={items} />
              <Pagination {...pagination} fetch={fetch} />
            </>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

Sales.defaultProps = {
  items: []
};

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
