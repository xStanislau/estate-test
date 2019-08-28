import React from "react";
import PropTypes from "prop-types";

const Card = ({ src, alt, description, price, houseArea, landArea }) => {
  return (
    <div className="card">
      <div className="card__img-wraper">
        <img
          className="card__img"
          src={"https://place-hold.it/300"}
          alt={alt}
        />
      </div>
      <p className="card__house-description">{description}</p>
      <div className="card__house-price">{price}</div>
      <div className="card__land-area">{houseArea}</div>
      <div className="card__house-area">{landArea}</div>
    </div>
  );
};

Card.defaultProps = {
  description: "Дом в посёлке Ромашково",
  price: "3000 $",
  houseArea: "10 соток",
  landArea: "100м ^ 2"
};

Card.propTypes = {};
export default Card;
