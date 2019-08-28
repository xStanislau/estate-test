import React from "react";
import PropTypes from "prop-types";
import { BASE_IMG_URL } from "../../api/urls";

const CardImg = ({ src, alt }) => {
  return <img className="card__img" src={`${BASE_IMG_URL}/${src}`} alt={alt} />;
};

CardImg.defaultProps = {};
CardImg.PropTypes = {};

export default CardImg;
