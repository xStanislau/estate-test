import React from "react";
import * as imgConfig from "../../../config/images";

const CardImg = ({ children, ...rest }) => {
  let imgStyle = {};

  if (rest.image) {
    const { image } = rest;
    const { id: imgId } = image;
    const { PREFIXES, URL } = imgConfig;
    const imgSrc = `${URL}/${imgId}-jqestate-${PREFIXES[1024]}`;
    imgStyle.backgroundImage = `url(${imgSrc})`;
    imgStyle.backgroundRepeat = "no-repeat";
  }

  return (
    <div className="card__img" style={imgStyle}>
      {children}
    </div>
  );
};

export default CardImg;
