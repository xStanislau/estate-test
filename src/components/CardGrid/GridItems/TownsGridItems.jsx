import React from "react";
import GridItem from "../../CardGrid/GridItem/GridItem";
import Card from "../../Card/Card";

// а компонент TownsGridItems
// и зачем давать значение TownsGridItems компоненту, который может использоваться и в других местах
// аналогично для SaleGridItems
// можно назвать Grid3Cols

const SaleGridItems = ({ items, className = "", isLoaded, ...rest }) => {
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
            <GridItem key={item.id} className="grid__item">
              <Card {...item} {...rest} />
            </GridItem>
          );
        })}
    </>
  );
};

export default SaleGridItems;
