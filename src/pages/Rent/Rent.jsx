import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import CardGrid from "../../components/CardGrid/CardGrid";
import FilterSidebar from "../../components/Filter/FilterSideBar/FilterSidebar";
import FilterBar from "../../components/Filter/FilterBar/FilterBar";
import FilterBadgeGroup from "../../components/Filter/FilterBar/FilterBadgeGroup/FilterBadgeGroup";
import Button from "../../components/Button/Button";
import constants from "../../constants/index";
import { mapToQueryParams } from "../../utils/mapToQueryParams";
import SaleGridItems from "../../components/CardGrid/GridItems/SaleGridItems";

class Rent extends Component {
  componentDidMount() {
    const {
      fetch,
      filterParams,
      location: { pathname }
    } = this.props;

    const { queryOptions } = constants;
    let queryParams = [...queryOptions[pathname.slice(1, pathname.length)]];
    if (filterParams && filterParams.length > 0) {
      queryParams = [...queryParams, ...filterParams];
    }
    fetch("/v1/properties/country", queryParams);
  }

  openFilter = () => {
    const { toggleFilter } = this.props;
    toggleFilter();
  };

  render() {
    const {
      items,
      pagination,
      fetch,
      isLoaded,
      location: { pathname },
      filterIsOpen,
      filterParams
    } = this.props;

    return (
      <>
        {filterIsOpen && <FilterSidebar pathname={pathname} />}
        <main className="main-container">
          <div className="content-wrapper px-3 mt-4 mb-4 ">
            <FilterBar>
              <Button
                className="round "
                variant="danger"
                onClick={this.openFilter}
              >
                Открыть фильтр
              </Button>
              <FilterBadgeGroup />
            </FilterBar>
            <h1 className="h1 page-title">Аренда недвижимости</h1>
          </div>
          <CardGrid isLoaded={isLoaded}>
            {isLoaded && (
              <SaleGridItems
                pathname={pathname}
                isLoaded={isLoaded}
                items={items}
              />
            )}
          </CardGrid>
          <Pagination
            {...pagination}
            fetch={fetch}
            path="/v1/properties/country"
            pathname={pathname}
            filterParams={filterParams}
          />
        </main>
      </>
    );
  }
}

Rent.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  return {
    items: state.sales.data.items,
    pagination: state.sales.data.pagination,
    isLoaded: state.sales.isLoaded,
    filterIsOpen: state.filter.isOpen,
    filterParams: mapToQueryParams(state.filter.values)
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter }
)(Rent);
