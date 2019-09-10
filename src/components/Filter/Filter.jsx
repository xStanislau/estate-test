import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Button from "../Button/Button";
import { fetch } from "../../redux/reducers/sales";
import constants from "../../constants";
import { connect } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";

class Filter extends Component {
  onChange = values => values => {};

  onSubmit = values => {
    const {
      queryOptions: {
        filters,
        filters: { kind }
      }
    } = constants;

    const { landAreaStart, landAreaEnd, areaEnd, areaStart } = values;

    let queryOptions = [];

    Object.keys(values).map(property => {
      if (kind[property]) {
        queryOptions.push({
          type: "filter",
          property: "kind",
          value: kind[property]
        });
      }
    });

    if (landAreaStart || landAreaEnd) {
      const start = landAreaStart || "";
      const end = landAreaEnd || "";
      const value = `${start}..${end}`;

      queryOptions.push({
        type: "filter",
        property: filters["landArea"],
        value: value
      });
    }

    if (areaStart || areaEnd) {
      const start = areaStart || "";
      const end = areaEnd || "";
      const value = `${start}..${end}`;

      queryOptions.push({
        type: "filter",
        property: filters["area"],
        value: value
      });
    }

    const { fetch } = this.props;
    if (queryOptions.length > 1) {
      fetch([...queryOptions]);
    }
  };

  render() {
    const { elementCount } = 0;
    return (
      <Form
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        render={({
          handleSubmit,
          reset,
          submitting,
          pristine,
          values,
          onChange
        }) => (
          <form onSubmit={handleSubmit} onChange={onChange(values)}>
            {/* <div>
              <Checkbox id="house" name="house" label="Дом" />
              <Checkbox id="land" name="land" label="Участок" />
              <Checkbox id="townhouse" name="townhouse" label="Таунхаус" />
              <Checkbox id="flat" name="flat" label="Квартира" />
              <label htmlFor="house">
                Дом
                <Field
                  name="house"
                  type="checkbox"
                  component="input"
                  id="house"
                />
                <span className="checkmark"></span>
              </label>
              <label htmlFor="townhouse">Таунхаус</label>
              <Field
                name="townhouse"
                type="checkbox"
                component="input"
                id="townhouse"
              />
              <label htmlFor="flat">Квартира</label>
              <Field name="flat" type="checkbox" component="input" id="flat" />
              <label htmlFor="office">Кв</label>
              <Field
                name="office"
                type="checkbox"
                component="input"
                id="office"
              />
            </div> */}
            <div>
              <label>Площадь участка</label>
              <Field
                name="landAreaStart"
                type="text"
                component="input"
                id="landArea"
              />
              <Field
                name="landAreaEnd"
                type="text"
                component="input"
                id="landArea"
              />
            </div>
            <div>
              <label>Площадь Дома</label>
              <Field
                name="areaStart"
                type="text"
                component="input"
                id="areaStart"
              />
              <Field
                name="areaEnd"
                type="text"
                component="input"
                id="areaEnd"
              />
            </div>
            <div className="buttons">
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>

              <Button type="submit" disabled={submitting}>
                Показать
              </Button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default connect(
  null,
  { fetch }
)(Filter);
