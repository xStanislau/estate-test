import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetch } from "../../redux/reducers/sales";
import { toggleFilter } from "../../redux/reducers/filter";
import Pagination from "../../components/Pagination/Pagination";
import CardGrid from "../../components/CardGrid/CardGrid";
import Filter from "../../components/Filter/Filter";
import Button from "../../components/Button/Button";

const Towns = ({
  items,
  pagination,
  fetch,
  isLoaded,
  location: { pathname },
  toggleFilter,
  filterIsOpen
}) => {
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
      {filterIsOpen && <Filter />}
      <main className="main-container">
        <div className="content-wrapper px-3 mt-4 mb-4">
          <Button
            className="my-4 round"
            variant="danger"
            onClick={() => {
              toggleFilter(true);
            }}
          >
            Открыть фильтр
          </Button>
          <h1 className="h1 page-title">Посёлки</h1>
        </div>
        <>
          <CardGrid items={items} isLoaded={isLoaded} />
          <Pagination {...pagination} fetch={fetch} pathname={pathname} />
        </>
      </main>
    </>
  );
};

Towns.defaultProps = {
  items: []
};

const mapStateToProps = state => {
  return {
    items: state.sales.data.items,
    pagination: state.sales.data.pagination,
    isLoaded: state.sales.isLoaded,
    filterIsOpen: state.filter.isOpen
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter }
)(Towns);
