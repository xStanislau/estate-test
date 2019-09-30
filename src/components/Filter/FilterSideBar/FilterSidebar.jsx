import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../Button/Button";
import { fetch } from "../../../redux/reducers/sales";
import {
  toggleFilter,
  getFilterFormValues
} from "../../../redux/reducers/filter";
import constants from "../../../constants";
import { connect } from "react-redux";
import { mapToQueryParams } from "../../../utils/mapToQueryParams";
import PropertyTypes from "./PropertyTypes/PropertyTypes";
import "./FilterSidebar.scss";
import LandArea from "./LandArea/LandArea";
import HouseArea from "./HouseArea/HouseArea";

class Filter extends Component {
  onSubmit = values => {
    let queryParams = mapToQueryParams(values);
    const { getFilterFormValues, pathname } = this.props;
    const { queryOptions } = constants;
    const { closeFilter } = this;

    queryParams = [
      ...queryOptions[pathname.slice(1, pathname.length)],
      ...queryParams
    ];

    if (queryParams && queryParams.length > 0) {
      getFilterFormValues(values);
    }
    closeFilter();
  };

  closeFilter = () => {
    const { toggleFilter } = this.props;
    toggleFilter();
  };

  componentDidMount() {
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
  }

  componentWillUnmount() {
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }

  render() {
    const { values } = this.props;
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          className={`filter`}
          initialValues={values && values}
          render={({ handleSubmit, submitting, className }) => (
            <form className={className} onSubmit={handleSubmit}>
              <Button
                className="close-btn"
                variant="danger"
                onClick={this.closeFilter}
              >
                <span>&times;</span>
              </Button>
              <div className="filter__inner">
                <PropertyTypes title="Тип Объекта" />
                <LandArea title="Площадь участка" />
                <HouseArea title="Полщадь дома" />
                <div className="buttons">
                  <Button
                    type="submit"
                    className="filter__submit-btn"
                    disabled={submitting}
                  >
                    Показать
                  </Button>
                </div>
              </div>
            </form>
          )}
        />
        <div className="filter__background" onClick={this.closeFilter}></div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.filter.values
  };
};

export default connect(
  mapStateToProps,
  { fetch, toggleFilter, getFilterFormValues }
)(Filter);
