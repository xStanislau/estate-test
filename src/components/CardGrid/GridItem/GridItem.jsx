import React from "react";
import { Col } from "react-bootstrap";

const GridItem = ({ className, children, ...rest }) => {
  return (
    <Col className={className} {...rest}>
      {children}
    </Col>
  );
};

// зачем этот компонент?

export default GridItem;
