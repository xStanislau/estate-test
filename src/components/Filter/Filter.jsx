import React, { Component } from "react";

import { Form, Field } from "react-final-form";
import Button from "../Button/Button";
import { fetch } from "../../redux/reducers/sales";
import constants from "../../constants";

class Filter extends Component {
  onChange = values => values => {
    const { queryOptions } = constants;
    // debugger;
    //    const querryOptions = {
    //         type: "filter",
    //         property: "kind",
    //         value: "house"
    //       },

    //     fetch();
  };

  onSubmit = values => {};

  render() {
    const { elementCount } = this.props.elementCount || 0;
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
            <div>
              <label htmlFor="house">house</label>
              <Field
                name="house"
                type="checkbox"
                component="input"
                id="house"
              />
              <label htmlFor="townhouse">house</label>
              <Field
                name="townhouse"
                type="checkbox"
                component="input"
                id="townhouse"
              />
              <label htmlFor="flat">house</label>
              <Field name="flat" type="checkbox" component="input" id="flat" />
              <label htmlFor="office">house</label>
              <Field
                name="office"
                type="checkbox"
                component="input"
                id="office"
              />
            </div>
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
                id="landArea"
              />
              <Field
                name="areaEnd"
                type="text"
                component="input"
                id="landArea"
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

              <Button
                type="submit"
                disabled={submitting}
              >{`Показать ${elementCount} объектов`}</Button>
            </div>
          </form>
        )}
      />
    );
  }
}

export default Filter;
