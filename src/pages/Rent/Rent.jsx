import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import CardGrid from "../../components/CardGrid/CardGrid";
import FilterSidebar from "../../components/Filter/FilterSideBar/FilterSidebar";
import CallBackSideBar from "../../components/CallBackSideBar/CallBackSideBar";
import FilterBar from "../../components/Filter/FilterBar/FilterBar";
import constants from "../../constants/index";
import { mapToQueryParams } from "../../utils/mapToQueryParams";
import SaleGridItems from "../../components/CardGrid/GridItems/SaleGridItems";
import { hideScrollOnBody } from "../../utils/scroll";
import Notification from "../../components/Notification/Notification";

class Rent extends Component {
  componentDidMount() {
    const {
      fetch,
      location: { pathname }
    } = this.props;
    const { queryOptions } = constants;
    let queryParams = [...queryOptions[pathname.slice(1, pathname.length)]];
    fetch("/v1/properties/country", queryParams);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterFormValues !== prevProps.filterFormValues) {
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
  }

  componentWillUnmount() {}

  openFilter = () => {
    const { toggleFilter } = this.props;
    toggleFilter();
    hideScrollOnBody();
  };

  render() {
    const {
      items,
      pagination,
      fetch,
      isLoaded,
      location: { pathname },
      filterParams
    } = this.props;

    return (
      <>
        <Notification />

        <CallBackSideBar />
        <FilterSidebar pathname={pathname} />
        <main className="main-container">
          <div className="content-wrapper px-3 mb-4 ">
            <FilterBar onClick={this.openFilter} />
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
            itemsPerPage={32}
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
    filterFormValues: state.filter.values,
    filterParams: mapToQueryParams(state.filter.values)
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter }
)(Rent);
