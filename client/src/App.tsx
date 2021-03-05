import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import DndColumns from "./components/dnd/DndColumns/DndColumns";
import TrashCan from "./components/TrashCan/TrashCan";

// interface user {
//   firstName: string,
//   lastName: string
// }

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <TrashCan size="s" />
        <DndColumns />
        <Users users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
