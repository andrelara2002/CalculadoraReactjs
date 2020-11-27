import React, { Component } from "react";
import "./styles.css";

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      operation: null,
      first_number: "",
      second_number: "",
      stage: 1
    };
  }
  setNumber = num => {
    if (this.state.first_number === '') {
      this.setState({
        first_number: num.toString()
      }, () => {
        document.getElementById('valueDisplay').innerHTML = this.state.first_number;
      })
    }
    else {
      this.setState({
        first_number: this.state.first_number.concat(num.toString())
      }, () => {
        document.getElementById('valueDisplay').innerHTML = this.state.first_number;
      })
    }
  };
  setOperator = (num) => {

    if (num === 1) {
      this.setState({
        operation: "+"
      }, () =>{
        this.updateLabels();
      })
    }
    else if (num === 2) {
      this.setState({
        operation: "x"
      }, () =>{
        this.updateLabels();
      })
    }
    else if (num === 3) {
      this.setState({
        operation: "/"
      }, () =>{
        this.updateLabels();
      })
    }
    else {
      this.setState({
        operation: "-"
      }, () =>{
        this.updateLabels();
      })
    }
  }

  updateLabels = () =>{
    const primaryDisplay = document.getElementById('valueDisplay')
    const secondaryDisplay = document.getElementById('secondaryDisplay')
    
    this.setState({
      second_number: this.state.first_number,
      first_number: '',
    }, () => {
      secondaryDisplay.innerHTML = this.state.second_number.concat(this.state.operation)
      primaryDisplay.innerHTML = "0";
    })
  }

  calculate = () =>{
    
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <div id="display">
            <p id='secondaryDisplay'>{0}</p>
            <h1 id='valueDisplay'>{0}</h1>
          </div>
          <div className="options">
            <button onClick={() => alert(0)}> AC </button>
            <button onClick={() => alert(0)}> C </button>
          </div>
          <div className="keypad">
            <div className="numbers">
              <button onClick={() => this.setNumber(1)}> {1} </button>
              <button onClick={() => this.setNumber(2)}> {2} </button>
              <button onClick={() => this.setNumber(3)}> {3} </button>
              <button onClick={() => this.setNumber(4)}> {4} </button>
              <button onClick={() => this.setNumber(5)}> {5} </button>
              <button onClick={() => this.setNumber(6)}> {6} </button>
              <button onClick={() => this.setNumber(7)}> {7} </button>
              <button onClick={() => this.setNumber(8)}> {8} </button>
              <button onClick={() => this.setNumber(9)}> {9} </button>
              <button id="dumbButton" />
              <button onClick={() => this.setNumber(0)}> {0} </button>
              <button id="equalButton"> = </button>
            </div>
            <div className="modifiers">
              <button onClick={() => this.setOperator(1)}> + </button>
              <button onClick={() => this.setOperator(2)}> x </button>
              <button onClick={() => this.setOperator(3)}> / </button>
              <button onClick={() => this.setOperator(4)}> - </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
