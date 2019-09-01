import React from "react";
import "./Card.scss";
import * as imgConfig from "../../config/images";
import propertyKind from "../../config/propertyKind";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Card = ({
  images: [image],
  specification: { area },
  landDetails: { area: landArea },
  kind,
  id,
  location: { localityName, mkadDistance },
  saleOffer: { price, currency }
}) => {
  let imgStyle = {};

  if (image) {
    const { id: imgId } = image;
    const { PREFIXES, URL } = imgConfig;
    const imgSrc = `${URL}/${imgId}-jqestate-${PREFIXES[1024]}`;
    imgStyle.backgroundImage = `url(${imgSrc})`;
    imgStyle.backgroundRepeat = "no-repeat";
  }

  const regionName = localityName || "";
  const distance = `${mkadDistance} км,` || "";
  const propertyType = `${propertyKind[kind]}, в Посёлке`;

  return (
    <>
      <LazyLoadComponent>
        <div className="card">
          <div className="card__img-wraper">
            {!image ? (
              <div className="card__img" style={imgStyle}>
                <h5 className="text-center ">No image</h5>
              </div>
            ) : (
              <div className="card__img" style={imgStyle} />
            )}
          </div>

          <p className="card__house-description">{`${propertyType} ${regionName}, ${distance} ID ${id ||
            ""}`}</p>
          <div className="card__house-price">{`${currency} ${price}`}</div>
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
  description: "Дом в посёлке Ромашково",
  price: "",
  area: "",
  landArea: ""
};

export default Card;
