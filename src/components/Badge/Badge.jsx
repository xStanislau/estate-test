import React from "react";
import { Badge as BsBadge } from "react-bootstrap";
import "./Badge.scss";

const Badge = ({ className, children, variant, ...rest }) => {
  return (
    <BsBadge className={className} variant={variant} {...rest}>
      {children}
    </BsBadge>
  );
};

export default Badge;
