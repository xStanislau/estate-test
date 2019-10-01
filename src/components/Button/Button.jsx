import React from "react";
import { Button as BsButton } from "react-bootstrap";
import "./Button.scss";

const Button = ({ children, variant, ...rest }) => {
  return (
    <BsButton variant={variant} {...rest}>
      {children}
    </BsButton>
  );
};

export default Button;
