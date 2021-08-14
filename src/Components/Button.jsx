import React, { Component } from 'react';
import "./Button.css";

class Button extends Component {
    state = {  }
    render() { 
        return ( 
        <div
            className="Button"
            onClick={this.props.onClick}        //for event handler??
            data-size={this.props.size}         //for css?          //data-value is for the value of the button     //label is what is shown in the <div>Value</div>    
            data-value={this.props.value}   >   
            {this.props.label}
        </div> 
        );
    }
}
 

export default Button;