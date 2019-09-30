import React from "react";
import Checkbox from "../../../Checkbox/Checkbox";

const PropertyTypes = ({ title }) => {
  return (
    <>
      <h4 className="h5 mb-3">{title}</h4>
      <div className="filter__group mb-4">
        <Checkbox id="house" name="kind.house" label="Дом" component="input" />
        <Checkbox
          id="land"
          name="kind.land"
          label="Участок"
          component="input"
        />
        <Checkbox
          id="townhouse"
          name="kind.townhouse"
          label="Таунхаус"
          component="input"
        />
        <Checkbox
          id="flat"
          name="kind.flat"
          label="Квартира"
          component="input"
        />
      </div>
    </>
  );
};

export default PropertyTypes;
