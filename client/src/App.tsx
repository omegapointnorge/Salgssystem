import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import DndColumns from "./components/dnd/DndColumns/DndColumns";
// import { ContextMenu } from "./components/ContextMenu/ContextMenu";
// import { IcontextMenuItem } from "./common/types";

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };

//   contextMenuArray: IcontextMenuItem[] = [
//     { "id": 0, "name": "Slett", "callback": () => console.log("Clicked item 1") },
//     { "id": 1, "name": "Lagre", "callback": () => console.log("Clicked item 2") },
//     { "id": 2, "name": "Rediger", "callback": () => console.log("Clicked item 3") },
// ];  

 valueRef = React.createRef();
 

  render() {
    return (
      <div className="App">
        <Header ref={this.valueRef}></Header>
        <DndColumns />
        {/* <ContextMenu menu={this.contextMenuArray}/> */}
      </div>
    );
  }
}

export default App;
