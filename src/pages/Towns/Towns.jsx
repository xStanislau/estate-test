import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/towns";
import Pagination from "../../components/Pagination/Pagination";
import TownsGridItems from "./TownsGridItems";
import CardGrid from "../../components/CardGrid/CardGrid";
import constants from "../../constants";
import CallBackSideBar from "../../components/CallBackSideBar/CallBackSideBar";
import Notification from "../../components/Notification/Notification";

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
      <>
        <Notification />
        <CallBackSideBar />
        <main className="main-container">
          <CardGrid isLoaded={isLoaded} className="towns-grid">
            {isLoaded && <TownsGridItems items={items} isLoaded={isLoaded} />}
          </CardGrid>
          <Pagination
            {...pagination}
            fetch={fetch}
            itemsPerPage={32}
            path="/v1/places/settlements/items"
            pathname={pathname}
          />
        </main>
      </>
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
