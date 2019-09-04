import React from "react";

const CardPrice = props => {
  const { className } = props;
  const { price, currency } = props.saleOffer || { price: "", currency: "" };
  const formatedPrice = Number(price).toLocaleString({
    style: "currency",
    currency: currency
  });
  return <div className={className}>{`${currency} ${formatedPrice}`}</div>;
};

export default CardPrice;
