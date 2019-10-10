import React from "react";
import { Field } from "react-final-form";

const Name = () => {
  return (
    <>
      <label htmlFor="name">Имя</label>
      <Field
        name="name"
        type="text"
        component="input"
        id="name"
        placeholder="Александр"
        pattern="[A-Za-z]{3,20}"
        title="At least 3 letters"
        required
      />
    </>
  );
};

export default Name;
