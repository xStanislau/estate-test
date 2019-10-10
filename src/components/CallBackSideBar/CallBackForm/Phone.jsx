import React from "react";
import { Field } from "react-final-form";

const Phone = () => {
  return (
    <>
      <label htmlFor="phone">Телефон</label>
      <Field
        name="phone"
        type="tel"
        component="input"
        id="phone"
        placeholder="375-33-888-33-22"
        title="Phone Number Format: 375-99-999-99-99"
        pattern="^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$"
        required
      />
    </>
  );
};

export default Phone;
