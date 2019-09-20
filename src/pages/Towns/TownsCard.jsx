import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import CardImg from "../../components/Card/CardImg/CardImg";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import NavLink from "../../components/NavLink/NavLink";
import propertyKind from "../../config/propertyKind";

const TownsCard = ({ cover, id, mkadDistance, name, routeName, stats }) => {
  return (
    <LazyLoadComponent>
      <div className="card">
        <Link to={`/sales/${id}`}>
          <div className="card__img-wraper">
            <CardImg className="card__img" cover={cover} small>
              <h3 className="h3">{name}</h3>
              <span>{routeName}</span>
            </CardImg>
          </div>
        </Link>
        <ListGroup className="list-group-flush">
          {Object.keys(stats.sale).map(kind => {
            const { sale } = stats;
            const kindOfProperty = propertyKind[kind];
            const number = sale[kind];

            return (
              <ListGroupItem>
                <NavLink
                  text={
                    <>
                      <span>{kindOfProperty}</span>
                      <span>{number}</span>
                    </>
                  }
                />
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </LazyLoadComponent>
  );
};

TownsCard.defaultProps = {
  // location: { localityName: "", mkadDistance: "" },
  // price: "",
  // area: "",
  // landArea: ""
};

export default TownsCard;
