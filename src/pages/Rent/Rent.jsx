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

const Rent = ({
  items,
  pagination,
  fetch,
  isLoaded,
  location: { pathname },
  toggleFilter,
  filterIsOpen,
  filterParams
}) => {
  useEffect(() => {
    const { queryOptions } = constants;

    let queryParams = [...queryOptions[pathname.slice(1, pathname.length)]];
    if (filterParams && filterParams.length > 0) {
      queryParams = [...queryParams, ...filterParams];
    }

    fetch(queryParams);
  }, [fetch, pathname]);

  return (
    <>
      {filterIsOpen && <Filter pathname={pathname} />}
      <main className="main-container">
        <div className="content-wrapper px-3 mt-4 mb-4 ">
          <FilterBar>
            <Button
              className="my-4 round "
              variant="danger"
              onClick={() => {
                toggleFilter(true);
              }}
            >
              Открыть фильтр
            </Button>
            <FilterBadgeGroup></FilterBadgeGroup>
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
    filterParams: state.filter.currentFilters
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter }
)(Rent);
