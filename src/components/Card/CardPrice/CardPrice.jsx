import React from "react";

const CardPrice = props => {
  const { className, pathname, tag: Tag = "div" } = props;
  let offer = pathname === "/rent" ? props.rentOffer : props.saleOffer;

  const { price, currency } = offer || { price: "", currency: "" };
  let formatedPrice = Number(price).toLocaleString({
    style: "currency",
    currency: currency
  });

  if (pathname === "/rent") {
    formatedPrice += " / месяц";
  }

  return <Tag className={className}>{`${currency} ${formatedPrice}`}</Tag>;
};

CardPrice.defaultProps = {
  saleOffer: { price: "", currency: "" }
};

export default CardPrice;
