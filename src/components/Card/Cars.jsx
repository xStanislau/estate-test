import React from "react";
import PropTypes from "prop-types";

const Card = ({ src, alt, description, price }) => {
  return (
    <div className="card">
      <div className="card__img-wraper">
        <img className="card__img" src={src} alt={alt} />
      </div>
      <p className="card__house-description">{description}</p>
      <div className="card__house-price">{price}</div>
      <div className="card__land-area">{houseArea}</div>
      <div className="card__house-area">{landArea}</div>
    </div>
  );
};

Card.defaultProps = {};

Card.PropTypes = {};
