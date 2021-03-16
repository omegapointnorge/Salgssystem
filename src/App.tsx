import { Component } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import DndColumns from "./components/dnd/DndColumns/DndColumns";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <DndColumns />
      </div>
    );
  }
}

export default App;
