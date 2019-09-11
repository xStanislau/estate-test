import React from "react";
import GridItem from "./GridItem/GridItem";
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
import "./CardGrid.scss";
import Loader from "../Loader/Loader";

const CardGrid = ({ items, className, isLoaded, ...rest }) => {
  return (
    <Container fluid className={`${className || ""} grid`}>
      {isLoaded ? (
        <Row className="grid__row">
          {items &&
            items.map(item => {
              let {
                images,
                kind,
                location: { localityName }
              } = item;

              if ((!images.length && !kind) || !localityName) {
                return null;
              }

              return (
                <GridItem key={item.id} className="grid__item">
                  <Card {...item} {...rest} />
                </GridItem>
              );
            })}
        </Row>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default CardGrid;
