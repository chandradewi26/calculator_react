import React, { Component } from "react";
import "./Nana-Calculator.css";

class Keypad extends Component {
  render() {
    return <div className="Nana-Keypad">{this.props.children}</div>;
  }
}

export default Keypad;
