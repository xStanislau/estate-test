import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "../Button/Button";
import { fetch } from "../../redux/reducers/sales";
import {
  toggleFilter,
  getCurrentFilters,
  getFilterFormValues
} from "../../redux/reducers/filter";
import constants from "../../constants";
import { connect } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";
import { mapToQueryParams } from "../../utils/mapToQueryParams";
import "./Filter.scss";

class Filter extends Component {
  onSubmit = values => {
    let queryParams = mapToQueryParams(values);

    const {
      fetch,
      getCurrentFilters,
      getFilterFormValues,
      pathname
    } = this.props;

    const { queryOptions } = constants;

    queryParams = [
      ...queryOptions[pathname.slice(1, pathname.length)],
      ...queryParams
    ];

    if (queryParams && queryParams.length > 0) {
      fetch(queryParams);
      getCurrentFilters(queryParams);
      getFilterFormValues(values);
    }
  };

  onClickSubmit = handleSubmit => {
    let toggleFilter = this.toggleFilter(false);

    return () => {
      handleSubmit();
      toggleFilter();
    };
  };

  toggleFilter = isOpen => () => {
    const { toggleFilter } = this.props;
    toggleFilter(isOpen);
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
            <form className={className}>
              <Button
                className="close-btn"
                variant="danger"
                onClick={this.toggleFilter(false)}
              >
                <span>&times;</span>
              </Button>
              <div className="filter__inner">
                <h4 className="h5 mb-3">Тип Объекта</h4>
                <div className="filter__group mb-4">
                  <Checkbox
                    id="house"
                    className="checkbox"
                    name="kind.house"
                    label="Дом"
                    component="input"
                    type="checkbox"
                  />
                  <Checkbox
                    id="land"
                    className="checkbox"
                    name="kind.land"
                    label="Участок"
                    component="input"
                    type="checkbox"
                  />
                  <Checkbox
                    id="townhouse"
                    className="checkbox"
                    name="kind.townhouse"
                    label="Таунхаус"
                    component="input"
                    type="checkbox"
                  />
                  <Checkbox
                    id="flat"
                    className="checkbox"
                    name="kind.flat"
                    label="Квартира"
                    component="input"
                  />
                </div>
                <h4 className="h5 mb-3">Площадь участка</h4>
                <div className="filter__range mb-4">
                  <Field
                    name="range.landArea.start"
                    type="text"
                    component="input"
                    id="landAreaStart"
                    placeholder="от"
                  />
                  <Field
                    name="range.landArea.end"
                    type="text"
                    component="input"
                    id="landAreaEnd"
                    placeholder="до"
                  />
                  <label htmlFor="landAreaStart">сот.</label>
                </div>

                <h4 className="h5 mb-3">Площадь Дома</h4>
                <div className="filter__range mb-4">
                  <Field
                    name="range.area.start"
                    type="text"
                    component="input"
                    id="areaStart"
                    placeholder="от"
                  />
                  <Field
                    name="range.area.end"
                    type="text"
                    component="input"
                    id="areaEnd"
                    placeholder="до"
                  />
                  <label htmlFor="areaStart">
                    м<sup>2</sup>
                  </label>
                </div>
                <div className="buttons">
                  <Button
                    type="submit"
                    className="filter__submit-btn"
                    onClick={this.onClickSubmit(handleSubmit)}
                    disabled={submitting}
                  >
                    Показать
                  </Button>
                </div>
              </div>
            </form>
          )}
        />
        <div
          className="filter__background"
          onClick={this.toggleFilter(false)}
        ></div>
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
  { fetch, toggleFilter, getCurrentFilters, getFilterFormValues }
)(Filter);
