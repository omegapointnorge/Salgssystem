// App.js
//
import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {},
    };
  }

  componentDidMount() {
    this.getFlower();
  }

  async getFlower() {
    const response = await fetch("/flower");
    const data = await response.json();
    this.setState({ flower: data });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.flower.name}</h1>
        <p>{this.state.flower.colour}</p>
      </div>
    );
  }
}
export default App;
