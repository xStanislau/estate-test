import React from "react";
import { Badge as BsBadge } from "react-bootstrap";
import "./Badge.scss";

const Badge = ({ children, variant, ...rest }) => {
  return (
    <BsBadge variant={variant} {...rest}>
      {children}
    </BsBadge>
  );
};

export default Badge;
