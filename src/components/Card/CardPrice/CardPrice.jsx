import React from "react";

const CardPrice = props => {
  const { className } = props;
  const { price, currency } = props.saleOffer || { price: "", currency: "" };
  return <div className={className}>{`${currency} ${price}`}</div>;
};

export default CardPrice;
