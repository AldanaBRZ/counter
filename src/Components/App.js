import React, { Component } from 'react'
import '../App.css';
import NumberDisplay from './NumberDisplay';
import Button from './Button';
import Display from './Display';
import ZeroButton from './ZeroButton';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      multiplier: 0
    }
  }

  handleCounterIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  handleCounterDecrease = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
            counter: prevState.counter - 1
      }))
    }
  }

  handleMultiplierIncrease = () => {
    this.setState((prevState) => ({
      multiplier: prevState.multiplier + 1
    }))
  }

  handleMultiplierDecrease = () => {
    if (this.state.multiplier > 0) {
      this.setState((prevState) => ({
            multiplier: prevState.multiplier - 1
      }))
    }
  }

  zeroCounter = () => {
    this.setState({
      counter: 0
    })
  }

  zeroMultiplier = () => {
    this.setState({
      multiplier: 0
    })
  }

  render() {
    return (
      <div className="App container"> 
        <div className="row"> {/* row div start */}
          <div className="col-10"> {/* col div start */}
            <div className="display-control">
              <h2>Contador</h2>
              <div className="container">
                <div className="row">
                  <ZeroButton handleClick={this.zeroCounter} />
                  <Button action="down" handleClick={this.handleCounterDecrease} />
                  <NumberDisplay number={this.state.counter} />
                  <Button action="up" handleClick={this.handleCounterIncrease} />
                </div>
              </div>
              
            </div>
          </div> {/* col div end */}
          <div className="col-10"> {/* col div start */}
            <div className="display-control">
              <Display counter={this.state.counter} multiplier={this.state.multiplier} />
            </div>
          </div> {/* col div end */}
          <div className="col-10"> {/* col div start */}
            <div className="display-control">
              <h2>Multiplicador</h2>
              <div className="container">
                <div className="row">
                  <ZeroButton handleClick={this.zeroMultiplier} />
                  <Button action="down" handleClick={this.handleMultiplierDecrease} />
                  <NumberDisplay number={this.state.multiplier} />
                  <Button action="up" handleClick={this.handleMultiplierIncrease} />
                </div>
              </div>
            </div>
          </div> {/* col div end */}
        </div> {/* row div end */}
      </div> 
    )
  }
}
