import React from "react";
import "./Card.scss";
import propertyKind from "../../config/propertyKind";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Badge from "../Badge/Badge";
import CardPrice from "./CardPrice/CardPrice";
import CardImg from "./CardImg/CardImg";
import { Link } from "react-router-dom";

const Card = ({
  images: [image],
  specification: { area },
  landDetails: { area: landArea },
  kind,
  id,
  location: { localityName, mkadDistance },
  scrollPosition,
  ...rest
}) => {
  const distance = `${mkadDistance} км,` || "";
  const propertyType = `${propertyKind[kind]}, в Посёлке`;
  return (
    <LazyLoadComponent>
      <div className="card">
        <Link
          className="card__img-link"
          to={{
            pathname: `${rest.pathname}/${id}`,
            state: { from: rest.pathname }
          }}
        >
          <div className="card__img-wraper">
            {rest.badge && (
              <div className="card__badge">
                <Badge
                  variant="danger"
                  style={{ backgroundColor: rest.badge.color }}
                >
                  {rest.badge.title}
                </Badge>
              </div>
            )}
            <CardImg className="card__img" image={image}></CardImg>
          </div>
        </Link>
        <Link
          className="card__house-description"
          to={{
            pathname: `${rest.pathname}/${id}`,
            state: { from: rest.pathname }
          }}
        >
          <p>{`${propertyType} ${localityName}, ${distance} ID ${id || ""}`}</p>
        </Link>

        <CardPrice className="card__house-price" {...rest} />
        <div className="card__size-info">
          {area && (
            <div className="card__land-area">
              <img src="./home.png" alt="home" />
              <span>
                {area} м<sup>2</sup>
              </span>
            </div>
          )}
          {landArea && (
            <div className="card__house-area">
              <img src="./land.png" alt="home" />
              <span> {landArea} сот</span>
            </div>
          )}
        </div>
      </div>
    </LazyLoadComponent>
  );
};

Card.defaultProps = {
  location: { localityName: "", mkadDistance: "" },
  price: "",
  area: "",
  landArea: ""
};

export default Card;
