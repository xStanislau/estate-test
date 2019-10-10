import React from "react";
import Checkbox from "../../../Checkbox/Checkbox";

const PropertyTypes = ({ title }) => {
  return (
    <>
      <h4 className="h5 mb-3">{title}</h4>
      <div className="sidebar__group mb-4">
        <Checkbox
          id="house"
          name="kind"
          label="Дом"
          component="input"
          value="house"
        />
        <Checkbox
          id="land"
          name="kind"
          label="Участок"
          component="input"
          value="land"
        />
        <Checkbox
          id="townhouse"
          name="kind"
          label="Таунхаус"
          component="input"
          value="townhouse"
        />
        <Checkbox
          id="flat"
          name="kind"
          label="Квартира"
          component="input"
          value="flat"
        />
      </div>
    </>
  );
};

export default PropertyTypes;
