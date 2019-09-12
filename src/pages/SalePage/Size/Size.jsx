import React from "react";

const Size = ({ kind, area, landArea }) => {
  return (
    <>
      {kind === "land" ? (
        <span>{landArea} сот.</span>
      ) : (
        <span>
          {area} м<sup>2</sup>
        </span>
      )}
    </>
  );
};

export default Size;
