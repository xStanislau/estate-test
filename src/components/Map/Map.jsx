import "./Map.scss";
import React from "react";

const Map = props => {
  return (
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9406.196410113967!2d27.5368331!3d53.8864436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x177ca6edea6a922d!2sEffectiveSoft!5e0!3m2!1sen!2sby!4v1568103025868!5m2!1sen!2sby"
      className="map"
      style={{ border: "0" }}
    ></iframe>
  );
};

export default Map;
