import React from "react";
import "./PreviewImgList.scss";

const PreviewImgList = ({ photos, onClick, className }) => {
  return (
    <>
      {photos &&
        photos.map((el, id) => {
          return (
            <img
              key={el.thumbnail}
              className={className}
              onClick={onClick(id)}
              src={el.thumbnail}
              alt="house"
            />
          );
        })}
    </>
  );
};

export default PreviewImgList;
