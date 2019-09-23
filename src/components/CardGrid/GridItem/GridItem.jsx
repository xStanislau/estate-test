import React from "react";
import { Col } from "react-bootstrap";

const GridItem = ({ className, children, ...rest }) => {
  return (
    <Col className={className} {...rest}>
      {children}
    </Col>
  );
};

export default GridItem;
