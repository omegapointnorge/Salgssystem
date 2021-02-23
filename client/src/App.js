import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import { DisplayBoard } from "./components/DisplayBoard";
import CreateUser from "./components/CreateUser";
import CardList from "./components/CardList/CardList";

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
        <CardList />
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <CreateUser
                user={this.state.user}
              ></CreateUser>
            </div>
            <div className="col-md-4">
              <DisplayBoard
                numberOfUsers={this.state.numberOfUsers}
              ></DisplayBoard>
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
