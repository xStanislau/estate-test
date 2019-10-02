import React from "react";
import { Field } from "react-final-form";

const HouseArea = ({ title }) => {
  return (
    <>
      <h4 className="h5 mb-3">{title}</h4>
      <div className="filter-sidebar__range mb-4">
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
    </>
  );
};

export default HouseArea;
