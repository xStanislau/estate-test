import React from "react";
import "./Burger.scss";

const Burger = ({ className, isOpen }) => {
  const open = isOpen ? "open" : "";
  return (
    <div className={`${className || ""} ${open} burger`}>
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
    </div>
  );
};

export default Burger;
