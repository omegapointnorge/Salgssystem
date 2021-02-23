import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header.tsx";
import { Users } from "./components/Users.tsx";
import { DisplayBoard } from "./components/DisplayBoard.tsx";
import CreateUser from "./components/CreateUser.tsx";
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
      </div>
    );
  }
}

export default App;
