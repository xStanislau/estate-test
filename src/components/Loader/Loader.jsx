import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

export default function Loader({ className }) {
  return (
    <div className={`loader ${className}`}>
      <div className="loader__inner">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
}
