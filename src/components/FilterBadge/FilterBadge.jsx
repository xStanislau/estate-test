import React from "react";
import Button from "../Button/Button";

const FilterBadge = ({
  className,
  text,
  onClick,
  close,
  withCloseIcon,
  ...rest
}) => {
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

export default FilterBadge;
