import React from "react";
import { Container, Row } from "react-bootstrap";
import "./CardGrid.scss";
import Loader from "../Loader/Loader";

const CardGrid = ({ isLoaded, children, className = "" }) => {
  return (
    <Container fluid className={`grid ${className}`}>
      <Row className="grid__row">
        {!isLoaded && <Loader />}
        {children}
      </Row>
    </Container>
  );
};

export default CardGrid;
