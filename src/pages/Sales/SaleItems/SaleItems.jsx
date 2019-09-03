import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card/Card";
import Badge from "../../../components/Badge/Badge";

import "./SaleItems.scss";

const SaleItems = ({ items }) => {
  return (
    <Container fluid className="sails-items">
      <Row className="sails-items__row">
        {items &&
          items.map((item, idx) => {
            let {
              images,
              kind,
              location: { localityName }
            } = item;

            if ((!images.length && !kind) || !localityName) {
              return null;
            }

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
                <Card {...item} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default SaleItems;
