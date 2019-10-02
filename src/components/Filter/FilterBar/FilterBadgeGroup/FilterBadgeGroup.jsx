import React, { Component } from "react";
import {
  deleteFilterParametr,
  resetFilter,
  getActiveFilters
} from "../../../../redux/reducers/filter";

import { connect } from "react-redux";
import FilterBadge from "../FilterBadge/FilterBadge";
import "./FilterBadgeGroup.scss";

class FilterBadgeGroup extends Component {
  deleteParametr = (key, value) => () => {
    const { deleteFilterParametr } = this.props;
    deleteFilterParametr({ key, value });
  };

  resetFilter = () => {
    const { resetFilter } = this.props;
    resetFilter();
  };

  render() {
    const { resetFilter, deleteParametr } = this;
    const { values } = this.props;

    if (values.length > 0) {
      values.push({ text: "Сбросить всё" });
    }

    return values.map((filter, index, filters) => {
      let { text, type = "", key = "" } = filter;
      let withCloseIcon = true;

      let closeHandler = deleteParametr(type, key);

      let handleClick;
      const isLastFilter = index === filters.length - 1;
      if (isLastFilter) {
        withCloseIcon = false;
        handleClick = resetFilter;
        closeHandler = null;
      }

      return (
        <FilterBadge
          key={text}
          text={text}
          className="round filter-badge"
          variant="light"
          onClick={handleClick}
          close={closeHandler}
          withCloseIcon={withCloseIcon}
        />
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    values: getActiveFilters(state)
  };
};

export default connect(
  mapStateToProps,
  { deleteFilterParametr, resetFilter }
)(FilterBadgeGroup);
