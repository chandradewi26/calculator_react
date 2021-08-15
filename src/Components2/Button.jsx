import React, { Component } from "react";
import "./Nana-Calculator.css";

function Button(props) {
  return (
    <button className="Nana-Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
