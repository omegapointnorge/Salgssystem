import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import DndColumns from "./components/dnd/DndColumns";

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
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <DndColumns />
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
