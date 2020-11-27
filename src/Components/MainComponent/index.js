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
    const primaryDisplay = document.getElementById('valueDisplay')
    const secondaryDisplay = document.getElementById('secondaryDisplay')

    const {operation} = this.state
    let total =  0
    let value_one = parseInt(this.state.first_number)
    let value_two = parseInt(this.state.second_number);

    if(operation === '+'){
      total += value_one+value_two
    }
    else if(operation === 'x'){
      total += value_one*value_two
    }
    else if(operation === '/'){
      total += value_two/value_one
    }
    else {
      total += value_two- value_one
    }

    primaryDisplay.innerHTML = total
    secondaryDisplay.innerHTML = this.state.first_number+operation+this.state.second_number

    this.setState({
      first_number : total.toString()
    })
  }

  clearLastLetter = () =>{
    let value = this.state.first_number.toString()
    if(document.getElementById('valueDisplay').innerHTML === '0'){
    }
    else{
      if(value.slice(0, -1) !=='')
      this.setState({
        first_number : value.slice(0, -1)
      }, () =>{
        document.getElementById('valueDisplay').innerHTML = this.state.first_number
      })
      else{
        this.setState({
          first_number : ''
        }, () =>{
          document.getElementById('valueDisplay').innerHTML = 0;
        })
      }
    }
  }

  clearAll = () =>{
    this.setState({
      first_number :'',
      second_number : '',
      operation : ''
    }, () => {
      document.getElementById('valueDisplay').innerHTML = 0
      document.getElementById('secondaryDisplay').innerHTML = 0
    })
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
            <button onClick={() => this.clearAll()}> AC </button>
            <button onClick={() => this.clearLastLetter()}> C </button>
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
              <button id="equalButton" onClick={()=>{this.calculate()}}> = </button>
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
