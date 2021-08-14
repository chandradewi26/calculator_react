import React, { Component } from 'react';
import Screen from "./Screen";
import Keypad from "./Keypad";
import Button from "./Button";
import "./Nana-Calculator.css";

class Calculator extends Component {
    //This code will be executed once Calculator is called
    constructor() {
        super();
        this.state={data: '000'}; //this is what is displayed in the screen display
    }

    calculate = () => {
        try {
            const result = eval(this.state.data); //  var a = eval("20/5") + "aaa <br>"; ~> 4aaa<br>
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({data: ''});
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value});
        }
    }

    render() { 
        return ( 
            <div className="Nana-Calculator">
                <Screen data={this.state.data}/>
                <Keypad>
                    <Button label='C' value="clear" />
                    <Button label='7' value="7" />
                    <Button label='4' value="4" />
                    <Button label='1' value="1" />
                    <Button label='0' value="0" />

                    
                    <Button label='/' value="/" />
                    <Button label='8' value="8" />
                    <Button label='5' value="5" />
                    <Button label='2' value="2" />
                    <Button label='.' value="." />

                    
                    <Button label='x' value="*" />
                    <Button label='9' value="9" />
                    <Button label='6' value="6" />
                    <Button label='3' value="3" />
                    <Button label=''  value="null" />

                    
                    <Button label='-' value="-" />
                    <Button label='+' value="+" />
                    <Button label='=' value="=" />

                </Keypad>
            </div>
         );
    }
}
 
export default Calculator;

