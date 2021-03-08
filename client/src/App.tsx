import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Users } from "./components/Users";
import DndColumns from "./components/dnd/DndColumns/DndColumns";
// import { ContextMenu } from "./ContextMenu/ContextMenu";
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

  

  render() {
    return (
      <div className="App">
        <Header></Header>
        <DndColumns />
        {/* <ContextMenu menu={this.contextMenuArray}/> */}
        <Users users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
