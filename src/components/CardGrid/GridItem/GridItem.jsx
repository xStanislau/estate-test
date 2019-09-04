import React from "react";
import { Col } from "react-bootstrap";

const GridItem = ({ className, children, ...rest }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={3} className={className} {...rest}>
      {children}
    </Col>
  );
};

export default GridItem;
