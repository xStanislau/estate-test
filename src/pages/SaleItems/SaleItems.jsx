import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card";
import "./SaleItems.scss";

const SaleItems = ({ items }) => {
  return (
    <>
      <Container fluid className="sails-items">
        <Row>
          {items.map((item, idx) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={3}
                key={item.id}
                className="sails-items__item"
              >
                <Card {...item} saleOffer={{ price: "1000", currency: "$" }} />
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
