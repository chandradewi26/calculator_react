import React, { Component } from 'react';
import "./Nana-Calculator.css";

class Screen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Nana-Screen">
                {this.props.data}
            </div>
         );
    }
}
 
export default Screen;

