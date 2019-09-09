import React from "react";
import communications from "../../../config/communications";

const Communications = ({ communication }) => {
  return (
    <ul className="sale__communication">
      {communications.communicationTypes.map(element => {
        const { translation, communicationType } = element;
        const isPowerSupply = communicationType === "powerSupply";
        let currentTypeValues = communications[communicationType];
        const incomingValue = communication[communicationType];

        let communicationValue;
        if (isPowerSupply) {
          communicationValue = `${incomingValue}${communications[communicationType]}`;
        } else {
          communicationValue = currentTypeValues[incomingValue];
        }

        return (
          <li
            key={element.communicationType}
            className="sale__communication-item"
          >
            <span className="sale__communication-label">{translation}</span>
            <span className="sale__communication-value">
              {communicationValue}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Communications;
