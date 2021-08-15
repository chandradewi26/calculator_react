import React, { Component } from 'react';
import Screen from "./Screen";
import Keypad from "./Keypad";
import Button from "./Button";
import "./Nana-Calculator.css";

class Calculator extends Component {
    //This code will be executed once Calculator is called
    constructor() {
        super();
        this.state={data: ''}; //this is what is displayed in the screen display
    }

    calculate = () => {
        try {
            const result = eval(this.state.data); //  var a = eval("20/5") + "aaa <br>"; ~> 4aaa<br>
            this.setState({data: result});
        } catch (e) 
        {
            this.setState({data: 'error'});
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
                <Screen data={this.state.data} />
                <Keypad>
                    <Button onClick={this.handleClick} label='C' value="clear" />
                    <Button onClick={this.handleClick} label='7' value="7" />
                    <Button onClick={this.handleClick} label='4' value="4" />
                    <Button onClick={this.handleClick} label='1' value="1" />
                    <Button onClick={this.handleClick} label='0' value="0" />

                    
                    <Button onClick={this.handleClick} label='/' value="/" />
                    <Button onClick={this.handleClick} label='8' value="8" />
                    <Button onClick={this.handleClick} label='5' value="5" />
                    <Button onClick={this.handleClick} label='2' value="2" />
                    <Button onClick={this.handleClick} label='.' value="." />

                    
                    <Button onClick={this.handleClick} label='x' value="*" />
                    <Button onClick={this.handleClick} label='9' value="9" />
                    <Button onClick={this.handleClick} label='6' value="6" />
                    <Button onClick={this.handleClick} label='3' value="3" />
                    <Button onClick={this.handleClick} label=''  value="null" />

                    
                    <Button onClick={this.handleClick} label='-' value="-" />
                    <Button onClick={this.handleClick} label='+' value="+" />
                    <Button onClick={this.handleClick} label='=' value="equal" />

                </Keypad>
            </div>
         );
    }
}
 
export default Calculator;

