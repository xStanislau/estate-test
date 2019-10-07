import React from "react";
import propertyKind from "../../../config/propertyKind";

const PropertyKind = ({ kind }) => {
  if (kind) {
    const text = propertyKind[kind] || "";
    return <span>{`${text} `}</span>;
  }
  return null;
};

export default PropertyKind;
