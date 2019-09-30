import React, { Component } from "react";
import constants from "../../../../constants";
import propertyKind from "../../../../config/propertyKind";
import {
  deleteFilterParametr,
  resetFilter,
  getActiveFilters
} from "../../../../redux/reducers/filter";

import { connect } from "react-redux";
import FilterBadge from "../FilterBadge/FilterBadge";
import "./FilterBadgeGroup.scss";
import { isEmpty } from "../../../../utils/isEmpty";

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
    return values.map((filter, index) => {
      let { text, type, key } = filter;
      let withCloseIcon = true;
      let handleClick;

      if (index === 9) {
        text = "Сбросить всё";
        withCloseIcon = false;
        handleClick = resetFilter;
      }

      return (
        <FilterBadge
          key={text}
          text={text}
          className="round filter-badge"
          variant="light"
          onClick={handleClick}
          close={deleteParametr(type, key)}
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
