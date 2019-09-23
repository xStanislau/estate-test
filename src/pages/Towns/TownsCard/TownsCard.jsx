import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import CardImg from "../../../components/Card/CardImg/CardImg";
import { Link } from "react-router-dom";
import TownsPropertyList from "./TownsPropertyList/TownsPropertyList";
import "./TownsCard.scss";

const TownsCard = ({ cover, id, mkadDistance, name, routeName, ...rest }) => {
  return (
    <LazyLoadComponent>
      <div className="card">
        <Link to="#" className="card__top-link">
          <div className="card__img-wraper">
            <CardImg className="card__img" cover={cover} small>
              <h3 className="h3">{name}</h3>
              <span>{routeName}</span>
            </CardImg>
          </div>
        </Link>
        <TownsPropertyList {...rest} />
      </div>
    </LazyLoadComponent>
  );
};

TownsCard.defaultProps = {
  mkadDistance: "",
  price: "",
  area: "",
  landArea: "",
  routeName: ""
};

export default TownsCard;
