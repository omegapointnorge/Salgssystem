import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import DndColumns from "./components/dnd/DndColumns/DndColumns";

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
        {/* <img src={bg} alt="Logo" className="bg" /> */}
        <Header></Header>
              <DndColumns />
          <Users users={this.state.users}></Users>
      </div>
    );
  }
}

export default App;
