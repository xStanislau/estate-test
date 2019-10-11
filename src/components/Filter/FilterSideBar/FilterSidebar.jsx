import React, { Component } from "react";
import { Form } from "react-final-form";
import Button from "../../Button/Button";
import {
  toggleFilter,
  getFilterFormValues,
  resetFilter
} from "../../../redux/reducers/filter";
import { connect } from "react-redux";
import PropertyTypes from "./PropertyTypes/PropertyTypes";
import "./FilterSidebar.scss";
import LandArea from "./LandArea/LandArea";
import HouseArea from "./HouseArea/HouseArea";
import { showScrollOnBody } from "../../../utils/scroll";

class FilterSidebar extends Component {
  onSubmit = values => {
    this.closeFilter();
    this.props.getFilterFormValues(values);
  };

  closeFilter = () => {
    const { toggleFilter } = this.props;
    toggleFilter();
    showScrollOnBody();
  };

  resetFilter = form => () => {
    const { resetFilter } = this.props;
    resetFilter();
    form.reset();
  };

  render() {
    let { values, isOpen } = this.props;

    if (values) {
      values = { ...values };
    }
    return (
      <>
        <div className={`sidebar ${isOpen ? "isOpen" : ""}`}>
          <Form
            onSubmit={this.onSubmit}
            className="sidebar__form"
            initialValues={values}
            render={({ handleSubmit, form, submitting, className, values }) => {
              return (
                <form className={className} onSubmit={handleSubmit}>
                  <Button
                    className="close-btn"
                    variant="main_pink"
                    onClick={this.closeFilter}
                  >
                    <span>&times;</span>
                  </Button>
                  <div className="sidebar__inner">
                    <PropertyTypes title="Тип Объекта" />
                    <LandArea title="Площадь участка" />
                    <HouseArea title="Полщадь дома" />
                    <div className="sidebar__buttons">
                      <Button
                        type="submit"
                        variant=" btn-main_pink"
                        className="sidebar__submit-btn"
                        disabled={submitting}
                      >
                        Показать
                      </Button>
                      <Button
                        type="button"
                        variant="outline-dark"
                        className="sidebar__submit-btn"
                        disabled={!Object.keys(values).length > 0 || submitting}
                        onClick={this.resetFilter(form)}
                      >
                        Очистить
                      </Button>
                    </div>
                  </div>
                </form>
              );
            }}
          />
        </div>
        <div
          className={`sidebar__background ${isOpen ? "isOpen" : ""}`}
          onClick={this.closeFilter}
        ></div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state.filter.values,
    isOpen: state.filter.isOpen
  };
};

export default connect(
  mapStateToProps,
  { toggleFilter, getFilterFormValues, resetFilter }
)(FilterSidebar);
