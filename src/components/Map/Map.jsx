import { Map as GoogleMap, GoogleApiWrapper, Marker } from "google-maps-react";

import React from "react";

const Map = props => {
  const mapStyles = {
    maxWidth: "1600px",
    height: "height: 100%"
  };

  return (
    <GoogleMap
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 53.886583, lng: 27.536833 }}
    >
      <Marker position={{ lat: 53.886583, lng: 27.536833 }} />
    </GoogleMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAt9mDktcQUnIDHmphZepDm2uRDMBSWp3k"
})(Map);
