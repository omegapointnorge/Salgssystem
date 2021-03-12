import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import DndColumns from "./components/dnd/DndColumns/DndColumns";

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };


  render() {
    return (
      <div className="App">
        <Header />
        <DndColumns />
      </div>
    );
  }
}

export default App;
