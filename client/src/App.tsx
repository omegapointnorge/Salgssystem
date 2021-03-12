import React, { Component } from "react";
import { Provider } from 'react-redux';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import DndColumns from "./components/dnd/DndColumns/DndColumns";
import store from "./redux/store";

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
  };

  // store = createStore(store);

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header />
        <DndColumns />
      </div>
      </Provider>
    );
  }
}

export default App;
