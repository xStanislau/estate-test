import React from "react";
import GridItem from "../../CardGrid/GridItem/GridItem";
import Card from "../../Card/Card";

const SaleGridItems = ({ items, isLoaded, ...rest }) => {
  return (
    <>
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
            <GridItem
              key={item.id}
              className="grid__item"
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={3}
            >
              <Card {...item} {...rest} />
            </GridItem>
          );
        })}
    </>
  );
};

export default SaleGridItems;
