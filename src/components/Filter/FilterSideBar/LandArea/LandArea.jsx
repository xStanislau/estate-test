import React from "react";
import { Field } from "react-final-form";

const LandArea = ({ title }) => {
  return (
    <>
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
    </>
  );
};

export default LandArea;
