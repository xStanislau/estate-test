import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card";

const SaleItems = ({ items }) => {
  return (
    <>
      <Container fluid>
        <Row>
          {items.map((item, idx) => {
            if (!item.saleOffer) {
            }
            return (
              <Col xs={4} sm={6} md={4} key={item.id}>
                <Card {...item} saleOffer={{}} />
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
