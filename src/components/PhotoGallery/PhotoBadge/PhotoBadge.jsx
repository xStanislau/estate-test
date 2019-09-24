import Badge from "../../Badge/Badge";
import React from "react";
import "./PhotoBadge.scss";

const PhotoBadge = ({ text, number }) => {
  return (
    <Badge variant="photo-badge">
      <span className="mr-1 photo-badge__text">{text}</span>
      <Badge variant="dark" className="photo-badge__number">
        {number}
      </Badge>
    </Badge>
  );
};

export default PhotoBadge;
