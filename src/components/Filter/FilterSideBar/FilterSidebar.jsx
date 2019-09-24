import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "../../Button/Button";
import { fetch } from "../../../redux/reducers/sales";
import { toggleFilter, getFilterFormValues } from "../../../redux/reducers/filter";
import constants from "../../../constants";
import { connect } from "react-redux";
import Checkbox from "../../Checkbox/Checkbox";
import { mapToQueryParams } from "../../../utils/mapToQueryParams";
import "./FilterSidebar.scss";

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
                <h4 className="h5 mb-3">Тип Объекта</h4>
                <div className="filter__group mb-4">
                  <Checkbox
                    id="house"
                    name="kind.house"
                    label="Дом"
                    component="input"
                  />
                  <Checkbox
                    id="land"
                    name="kind.land"
                    label="Участок"
                    component="input"
                  />
                  <Checkbox
                    id="townhouse"
                    name="kind.townhouse"
                    label="Таунхаус"
                    component="input"
                  />
                  <Checkbox
                    id="flat"
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
