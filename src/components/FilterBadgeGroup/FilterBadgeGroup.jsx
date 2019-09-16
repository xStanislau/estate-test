import React, { Component } from "react";
import constants from "../../constants/";
import propertyKind from "../../config/propertyKind";
import { deleteFilterParametr } from "../../redux/reducers/filter";
import { connect } from "react-redux";
import Button from "../Button/Button";

class FilterBadgeGroup extends Component {
  deleteParametr = (key, value) => () => {
    const { deleteFilterParametr } = this.props;
    deleteFilterParametr({ key, value });
  };

  render() {
    debugger;
    const { values } = this.props;
    let valuesKeys = [];

    if (values) {
      valuesKeys = Object.keys(values);
    }

    const Badges = valuesKeys.map(value => {
      const { units } = constants;

      let filterKinds = [];
      if (values[value] && value == "kind") {
        const propertyKinds = Object.keys(values[value]);
        filterKinds = propertyKinds.map(kind => {
          return (
            <Button key={kind}>
              {propertyKind[kind]}

              <span
                className="close"
                onClick={this.deleteParametr("kind", kind)}
              >
                &times;
              </span>
            </Button>
          );
        });
      }

      let filterRange = [];
      if (values[value] && value == "range") {
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

            const element = (
              <Button key={key}>
                {text}
                <span
                  className="close"
                  onClick={this.deleteParametr("range", key)}
                >
                  &times;
                </span>
              </Button>
            );

            filterRange.push(element);
          }
        }
      }
      return [...filterKinds, ...filterRange];
    });

    const [first = [], second = []] = Badges;
    return <>{values && [...first, ...second]}</>;
  }
}

const mapStateToProps = state => {
  return {
    values: state.filter.values
  };
};

export default connect(
  mapStateToProps,
  { deleteFilterParametr }
)(FilterBadgeGroup);
