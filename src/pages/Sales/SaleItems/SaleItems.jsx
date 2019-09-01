import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../../components/Card/Card";
import "./SaleItems.scss";

const SaleItems = ({ items }) => {
  return (
    <>
      <Container fluid className="sails-items">
        <Row>
          {items &&
            items.map((item, idx) => {
              let {
                saleOffer,
                images,
                kind,
                location: { localityName }
              } = item;

              if (!saleOffer) {
                saleOffer = { price: "", currency: "" };
              }

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
                  <Card {...item} saleOffer={saleOffer} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default SaleItems;
