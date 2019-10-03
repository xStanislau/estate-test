import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import CardGrid from "../../components/CardGrid/CardGrid";
import FilterSidebar from "../../components/Filter/FilterSideBar/FilterSidebar";
import Button from "../../components/Button/Button";
import constants from "../../constants/index";
import FilterBar from "../../components/Filter/FilterBar/FilterBar";
import FilterBadgeGroup from "../../components/Filter/FilterBar/FilterBadgeGroup/FilterBadgeGroup";
import { mapToQueryParams } from "../../utils/mapToQueryParams";
import SaleGridItems from "../../components/CardGrid/GridItems/SaleGridItems";
import PropTypes from "prop-types";
import PropertyTypes from "../../components/Filter/FilterSideBar/PropertyTypes/PropertyTypes";

class Sales extends Component {
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
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
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
        <FilterSidebar isOpen={filterIsOpen} pathname={pathname} />
        <main className="main-container">
          <div className="content-wrapper px-3  mb-4 ">
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

Sales.defaultProps = {
  items: [],
  pagination: {}
};

Sales.propTypes = {
  pagination: PropTypes.shape({
    total: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number
  }).isRequired,
  filterIsOpen: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      badge: PropertyTypes.string,
      category: PropTypes.string,
      clientLeadId: PropTypes.number,
      communication: PropTypes.shape({
        sewerageSupply: PropTypes.string,
        gasSupply: PropTypes.string,
        powerSupply: PropTypes.number,
        waterSupply: PropTypes.string
      }),
      createdAt: PropTypes.string,
      createdByUserId: PropTypes.number,
      equipment: PropTypes.array,
      id: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          comment: PropTypes.string,
          height: PropTypes.number,
          id: PropTypes.string,
          isPublic: PropTypes.bool,
          width: PropTypes.number
        })
      ),
      kind: PropTypes.string,
      landDetails: PropTypes.shape({
        area: PropTypes.number,
        landscapeKind: PropTypes.arrayOf(PropTypes.string),
        landscaping: PropTypes.bool
      }),
      layoutImages: PropTypes.array,
      linkedContactIds: PropTypes.arrayOf(PropTypes.number)
    })
  ).isRequired
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
)(Sales);
