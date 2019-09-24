import React from "react";
import { Field } from "react-final-form";
import "./Checkbox.scss";

const Checkbox = ({ id, className, label, ...rest }) => {
  return (
    <label htmlFor={id} className="checkbox">
      <Field id={id} type="checkbox" {...rest} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;
