import React from "react";
import Button from "../Button/Button";

const FilterBadge = ({ className, text, onClick, close, withCloseIcon }) => {
  return (
    <Button className={className} onClick={onClick} variant="light">
      {text}
      {withCloseIcon && (
        <span className="close" onClick={close}>
          &times;
        </span>
      )}
    </Button>
  );
};

// почему не https://react-bootstrap.netlify.com/components/badge/ ???

export default FilterBadge;
