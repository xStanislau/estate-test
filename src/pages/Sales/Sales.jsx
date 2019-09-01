import React, { useEffect } from "react";
import { connect } from "react-redux";
import SalesItems from "./SaleItems/SaleItems";
import { fetch } from "../../redux/reducers/sales";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";
import "./Sales.scss";
import Loader from "../../components/Loader/Loader";

const Sales = ({ items, pagination, fetch, isLoaded }) => {
  useEffect(() => {
    fetch();
  }, [fetch]);
  const warning = "Нет объектов";
  return (
    <div className="wrapper">
      <Header text="Обратный звонок" phoneNumber="+7(496)132-03-90" />
      <h1 className="sales__title">Элитная недвижимость в Подмосковье</h1>
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
    </div>
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
