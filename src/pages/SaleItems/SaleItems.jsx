import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card";

const SaleItems = ({ items }) => {
  return (
    <>
      <Container>
        <Row>
          {items.map(item => {
            return (
              <Col xs={10} sm={4} md={4}>
                <Card />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

SaleItems.defaultProps = {};
SaleItems.propTypes = {};

export default SaleItems;
