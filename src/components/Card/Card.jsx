import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { CardImg } from "react-bootstrap";
import * as imgConfig from "../../config/images";
import { SimpleImg } from "react-simple-img";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Card = ({
  src,
  alt,
  images: [image],
  description,
  houseArea,
  landArea,
  kind,
  category,
  id,
  location: { settlementName, mkadDistance },
  saleOffer: { price, currency }
}) => {
  const { id: imgId } = image;
  const { PREFIXES, URL } = imgConfig;
  const imgSrc = `${URL}/${imgId}-jqestate-${PREFIXES[1024]}`;
  return (
    <div className="card">
      <div className="card__img-wraper">
        <LazyLoadComponent>
          <div
            className="card__img"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundRepeat: "no-repeat"
            }}
          />
        </LazyLoadComponent>
      </div>
      <p className="card__house-description">{`${settlementName}, ${mkadDistance} км, ${id}`}</p>
      {price && currency && (
        <div className="card__house-price">{`${price} ${currency}`}</div>
      )}
      <div className="card__land-area">{houseArea}</div>
      <div className="card__house-area">{landArea}</div>
    </div>
  );
};

Card.defaultProps = {
  description: "Дом в посёлке Ромашково",
  price: "3000 $",
  houseArea: "10 соток",
  landArea: "100м ^ 2",
  saleOffer: { price: "", currency: "" }
};

Card.propTypes = {};

export default Card;
