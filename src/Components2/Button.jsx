import React, { Component } from 'react';
import "./Nana-Calculator.css";

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nana-Button"
            onClick = {this.props.onClick}
            data-size={this.props.size}
            data-value={this.props.value} >
            {this.props.label}              
            </div>


         );
    }
}
 
export default Button;
