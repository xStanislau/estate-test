import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import propertyKind from "../../../../config/propertyKind";

const TownsPropertyList = ({ stats }) => {
  let list = [];
  let sale = stats.sale || stats.rent;
  let { plural } = propertyKind;

  for (const key in plural) {
    if (plural.hasOwnProperty(key)) {
      const element = plural[key];
      if (sale[key]) {
        list.push({ number: sale[key], kind: element });
      } else {
        list.push({ number: 0, kind: element });
      }
    }
  }

  return (
    <ListGroup className="list-group-flush">
      {list.map((element, index) => {
        const { kind, number } = element;
        const active = number ? "active" : "";

        return (
          <ListGroupItem
            key={`${element.kind}${index}`}
            className="towns__property-list"
          >
            <NavLink
              className={`towns__property-item ${active}`}
              activeClassName={active}
              to="#"
            >
              <span>{kind}</span>
              <span>{number}</span>
            </NavLink>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default TownsPropertyList;
