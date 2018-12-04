import React, { Component } from "react";
import "./App.css";
import StudentCreateAccount from "./components/StudentCreateAccount";
import Connexion from "./components/Connexion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentCreateAccount />
        <Connexion />
      </div>
    );
  }
}

export default App;
