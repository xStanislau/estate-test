import React from "react";
import { Badge as BsBadge } from "react-bootstrap";
import "./Badge.scss";

const Badge = ({ className, children, ...rest }) => {
  return (
    <BsBadge className={className} {...rest}>
      {children}
    </BsBadge>
  );
};

export default Badge;
