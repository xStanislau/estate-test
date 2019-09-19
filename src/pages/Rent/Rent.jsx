import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import CardGrid from "../../components/CardGrid/CardGrid";
import Filter from "../../components/Filter/Filter";
import Button from "../../components/Button/Button";
import constants from "../../constants/index";
import FilterBar from "../../components/FilterBar/FilterBar";
import FilterBadgeGroup from "../../components/FilterBadgeGroup/FilterBadgeGroup";
import { mapToQueryParams } from "../../utils/mapToQueryParams";

const Rent = ({
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
    fetch(queryParams);
  }, [fetch, pathname, values]);

  return (
    <>
      {filterIsOpen && <Filter pathname={pathname} />}
      <main className="main-container">
        <div className="content-wrapper px-3 mt-4 mb-4 ">
          <FilterBar>
            <Button className="round " variant="danger" onClick={openFilter}>
              Открыть фильтр
            </Button>
            <FilterBadgeGroup />
          </FilterBar>
          <h1 className="h1 page-title">Аренда недвижимости</h1>
        </div>
        <CardGrid pathname={pathname} isLoaded={isLoaded} items={items} />

        <Pagination
          {...pagination}
          fetch={fetch}
          pathname={pathname}
          filterParams={filterParams}
        />
      </main>
    </>
  );
};

Rent.defaultProps = {
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
)(Rent);
