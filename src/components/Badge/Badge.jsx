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

// proptypes
// и чем ты расширил этот компонент ???
// https://react-bootstrap.github.io/components/badge/ есть параметр "variant". почему не расширять через него?

export default Badge;
