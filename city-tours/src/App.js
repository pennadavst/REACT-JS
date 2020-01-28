import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Tourlist></Tourlist>
      </React.Fragment>
    );
  }
}

export default App;
