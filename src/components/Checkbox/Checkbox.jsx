import React from "react";
import { Field } from "react-final-form";

const Checkbox = ({ id, lableClassName, label, ...rest }) => {
  return (
    <label htmlFor="house" className={lableClassName}>
      {label}
      <Field id={id} type="checkbox" {...rest} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
