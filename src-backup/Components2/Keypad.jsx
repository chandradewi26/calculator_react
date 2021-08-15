import React, { Component } from 'react';
import "./Nana-Calculator.css";

class Keypad extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nana-Keypad">
                {this.props.children}
            </div>
         );
    }
}
 
export default Keypad;
