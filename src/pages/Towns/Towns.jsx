import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch, refresh } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import TownsGridItems from "./TownsGridItems";
import CardGrid from "../../components/CardGrid/CardGrid";
import constants from "../../constants";
import { mapToQueryParams } from "../../utils/mapToQueryParams";

class Towns extends Component {
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
    debugger;
    fetch("/v1/places/settlements/items", queryParams);
  }

  componentWillUnmount() {
    const { refresh } = this.props;

    refresh();
  }

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
      <main className="main-container mt-5">
        <CardGrid isLoaded={isLoaded} className="towns-grid">
          {isLoaded && <TownsGridItems items={items} isLoaded={isLoaded} />}
        </CardGrid>
        <Pagination
          {...pagination}
          fetch={fetch}
          path="/v1/places/settlements/items"
          filterParams={filterParams}
          pathname={pathname}
        />
      </main>
    );
  }
}

Towns.defaultProps = {
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
  { fetch, toggleFilter, refresh }
)(Towns);
