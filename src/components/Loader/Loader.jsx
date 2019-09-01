import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
