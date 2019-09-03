import React from "react";

const CardPrice = props => {
  const { price, currency } = props.saleOffer || { price: "", currency: "" };
  return <div className="card__house-price">{`${currency} ${price}`}</div>;
};

export default CardPrice;
