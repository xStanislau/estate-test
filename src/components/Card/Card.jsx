import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({
  src,
  alt,
  description,
  houseArea,
  landArea,
  kind,
  category,
  id,
  location: { settlementName, mkadDistance },
  saleOffer: { price, currency }
}) => {
  return (
    <div className="card">
      <div className="card__img-wraper">
        <img
          className="card__img"
          src={"https://place-hold.it/950x515"}
          alt={alt}
        />
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
