import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import CardGrid from "../../components/CardGrid/CardGrid";

const Sales = ({
  items,
  pagination,
  fetch,
  isLoaded,
  location: { pathname }
}) => {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <>
      <h1 className="h1 page-title">Элитная недвижимость</h1>
      <>
        {isLoaded ? <CardGrid items={items} /> : <Loader />}
        <Pagination {...pagination} fetch={fetch} pathname={pathname} />
      </>
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
