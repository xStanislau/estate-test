import React from "react";
import { Button as BsButton } from "react-bootstrap";

const Button = ({ className, children, ...rest }) => {
  return (
    <BsButton className={className} {...rest}>
      {children}
    </BsButton>
  );
};

export default Button;
