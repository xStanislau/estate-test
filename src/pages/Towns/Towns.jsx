import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/towns";
import Pagination from "../../components/Pagination/Pagination";
import TownsGridItems from "./TownsGridItems";
import CardGrid from "../../components/CardGrid/CardGrid";
import constants from "../../constants";
import { mapToQueryParams } from "../../utils/mapToQueryParams";

class Towns extends Component {
  componentDidMount() {
    const {
      fetch,
      location: { pathname }
    } = this.props;

    const { queryOptions } = constants;
    let queryParams = [...queryOptions[pathname.slice(1, pathname.length)]];

    fetch("/v1/places/settlements/items", queryParams);
  }

  render() {
    const {
      items,
      pagination,
      fetch,
      isLoaded,
      location: { pathname }
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
    items: state.towns.data.items,
    pagination: state.towns.data.pagination,
    isLoaded: state.towns.isLoaded
  };
};

export default connect(
  mapStateToProps,
  { fetch }
)(Towns);
