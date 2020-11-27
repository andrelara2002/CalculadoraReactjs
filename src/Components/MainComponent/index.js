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
    if(this.state.first_number === ''){
      this.setState({
        first_number: num.toString()
      }, ()=>{
        document.getElementById('valueDisplay').innerHTML = this.state.first_number;
      })
    }
    else{
      this.setState({
        first_number: this.state.first_number.concat(num.toString())
      }, () =>{
        document.getElementById('valueDisplay').innerHTML = this.state.first_number;
      })
    }
  };
  render() {
    return (
      <div>
        <div className="calculator">
          <div id="display">
            <p>{0}</p>
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
              <button onClick={() => alert(0)}> + </button>
              <button onClick={() => alert(0)}> x </button>
              <button onClick={() => alert(0)}> / </button>
              <button onClick={() => alert(0)}> - </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
