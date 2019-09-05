import { Map as GoogleMap, GoogleApiWrapper, Marker } from "google-maps-react";

import React from "react";

const Map = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <GoogleMap
      google={props.google}
      zoom={8}
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
