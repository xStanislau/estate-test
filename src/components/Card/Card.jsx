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
  ...rest
}) => {
  const regionName = localityName || "";
  const distance = `${mkadDistance} км,` || "";
  const propertyType = `${propertyKind[kind]}, в Посёлке`;

  return (
    <>
      <LazyLoadComponent>
        <div className="card">
          <Link to="#">
            <div className="card__img-wraper">
              {rest.badge && (
                <Badge
                  className="card__badge"
                  variant="danger"
                  style={{ backgroundColor: rest.badge.color }}
                >
                  {rest.badge.title}
                </Badge>
              )}

              {!image ? (
                <CardImg className="card__img" image={image}>
                  <h5 className="text-center ">No image</h5>
                </CardImg>
              ) : (
                <CardImg className="card__img" image={image} />
              )}
            </div>
          </Link>
          <Link>
            <p className="card__house-description">{`${propertyType} ${regionName}, ${distance} ID ${id ||
              ""}`}</p>
          </Link>
          <CardPrice {...rest} />
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
    </>
  );
};

Card.defaultProps = {
  price: "",
  area: "",
  landArea: ""
};

export default Card;
