import React from "react";
import GridItem from "../../components/CardGrid/GridItem/GridItem";
import TownsCard from "./TownsCard";
import "./TownsGridItems.scss";

const TownsGridItems = ({ items, className = "", isLoaded, ...rest }) => {
  debugger;
  return (
    <>
      {items &&
        items.map(item => {
          let { cover, name } = item;
          if (!cover && !name) {
            return null;
          }

          return (
            <GridItem key={item.id} className="grid__item">
              <TownsCard {...item} {...rest} />
            </GridItem>
          );
        })}
    </>
  );
};

export default TownsGridItems;
