import React, { Component } from 'react';
import "./Display.css";

class Display extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Display">
                
                {this.props.data}
            </div>
         );
    }
}
 
export default Display;