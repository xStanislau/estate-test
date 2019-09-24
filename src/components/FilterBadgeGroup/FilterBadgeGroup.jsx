import React, { Component } from "react";
import constants from "../../constants/";
import propertyKind from "../../config/propertyKind";
import { deleteFilterParametr, resetFilter } from "../../redux/reducers/filter";
import { connect } from "react-redux";
import FilterBadge from "../FilterBadge/FilterBadge";
import "./FilterBadgeGroup.scss";
import { isEmpty } from "../../utils/isEmpty";

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
    const { values } = this.props;
    const { resetFilter } = this;
    let Badges = [];
    if (!isEmpty(values)) {
      const valuesKeys = Object.keys(values);

      Badges = valuesKeys.map(value => {
        const { units } = constants;
        let filterKinds = [];
        if (values[value] && value === "kind") {
          const propertyKinds = Object.keys(values[value]);
          filterKinds = propertyKinds.map(kind => {
            return (
              <FilterBadge
                key={kind}
                text={propertyKind[kind]}
                className="round filter-badge"
                variant="light"
                onClick={this.deleteParametr(value, kind)}
                withCloseIcon
              />
            );
          });
        }

        let filterRange = [];
        if (values[value] && value === "range") {
          let range = values[value];
          for (const key in range) {
            let text;
            if (range.hasOwnProperty(key)) {
              let currentRange = range[key];
              if (!currentRange.end && currentRange.start) {
                text = `от ${currentRange.start} ${units[key].name}`;
                filterRange.push(text);
              } else if (currentRange.start && currentRange.end) {
                text = `${currentRange.start} - ${currentRange.end} ${units[key].name}`;
              } else {
                text = `до ${currentRange.end} ${units[key].name}`;
              }
              filterRange.push(
                <FilterBadge
                  key={key}
                  text={text}
                  className="round filter-badge"
                  variant="light"
                  close={this.deleteParametr("range", key)}
                  withCloseIcon
                />
              );
            }
          }
        }

        return [...filterKinds, ...filterRange];
      });

      // что-то ты перемудрил с Badges. нужно переписать и разбить, я так понимаю на части
      // не читабельно совсем
    }

    let lastBadge;
    if (Badges.length > 0) {
      lastBadge = (
        <FilterBadge
          key="Сбросить все"
          text="Сбросить все"
          className="round filter-badge"
          variant="light"
          onClick={resetFilter}
        />
      );
    }

    const [first = [], second = []] = Badges;

    return <>{values && [...first, ...second, lastBadge]}</>;
  }
}

const mapStateToProps = state => {
  const values = { ...state.filter.values };
  const { kind: kinds = {} } = values;

  let kindsLength = Object.keys(kinds).filter(kind => kinds[kind]).length;
  if (kindsLength < 1) {
    delete values.kind;
  }

  return {
    values: values
  };
};

export default connect(
  mapStateToProps,
  { deleteFilterParametr, resetFilter }
)(FilterBadgeGroup);
