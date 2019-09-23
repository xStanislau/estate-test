import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import TownsGridItems from "./TownsGridItems";
import CardGrid from "../../components/CardGrid/CardGrid";
import Filter from "../../components/Filter/Filter";
import constants from "../../constants";
import { mapToQueryParams } from "../../utils/mapToQueryParams";

const Sales = ({
  items,
  pagination,
  fetch,
  isLoaded,
  location: { pathname },
  toggleFilter,
  filterIsOpen,
  values
}) => {
  const openFilter = () => {
    toggleFilter();
  };

  let filterParams = mapToQueryParams(values);
  useEffect(() => {
    const { queryOptions } = constants;
    let queryParams = [...queryOptions[pathname.slice(1, pathname.length)]];
    if (filterParams && filterParams.length > 0) {
      queryParams = [...queryParams, ...filterParams];
    }
    fetch("/v1/places/settlements/items", queryParams);
  }, [fetch, pathname, values]);
  return (
    <>
      {filterIsOpen && <Filter pathname={pathname} />}
      <main className="main-container mt-5">
        <CardGrid isLoaded={isLoaded} className="towns-grid">
          <TownsGridItems items={items} isLoaded={isLoaded} />
        </CardGrid>
        <Pagination
          {...pagination}
          fetch={fetch}
          path="/v1/places/settlements/items"
          filterParams={filterParams}
          pathname={pathname}
        />
      </main>
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
    isLoaded: state.sales.isLoaded,
    filterIsOpen: state.filter.isOpen,
    values: state.filter.values
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter }
)(Sales);
