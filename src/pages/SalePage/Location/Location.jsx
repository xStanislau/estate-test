import React from "react";
import { formatDistance } from "../../../utils/formatDistance";
import { formatPlace } from "../../../utils/formatPlace";

const Location = ({ localityName, mkadDistance }) => {
  if (localityName) {
    return (
      <span>{`, ${formatPlace("в Посёлке", localityName)}, ${formatDistance(
        mkadDistance,
        "км."
      )}`}</span>
    );
  }
  return null;
};

export default Location;
