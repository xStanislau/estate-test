import React from "react";

const CardPrice = props => {
  const { className, pathname } = props;
  let offer = pathname === "/rent" ? props.rentOffer : props.saleOffer;

  const { price, currency } = offer || { price: "", currency: "" };
  let formatedPrice = Number(price).toLocaleString({
    style: "currency",
    currency: currency
  });

  if (pathname === "/rent") {
    formatedPrice += " / месяц";
  }

  return <div className={className}>{`${currency} ${formatedPrice}`}</div>;
};

CardPrice.defaultProps = {
  saleOffer: { price: "", currency: "" }
};

export default CardPrice;
