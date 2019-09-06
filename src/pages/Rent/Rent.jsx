import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import CardGrid from "../../components/CardGrid/CardGrid";
import constants from "../../constants/";

const Rent = ({
  items,
  pagination,
  fetch,
  isLoaded,
  location: { pathname }
}) => {
  useEffect(() => {
    const { queryOptions } = constants;
    fetch(queryOptions[pathname.slice(1, pathname.length)]);
  }, [fetch]);

  return (
    <main className="main-container">
      <h1 className="h1 page-title">Аренда недвижимости</h1>
      {!isLoaded && <Loader />}
      <CardGrid pathname={pathname} items={items} />
      <Pagination {...pagination} fetch={fetch} pathname={pathname} />
    </main>
  );
};

Rent.defaultProps = {
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
)(Rent);
