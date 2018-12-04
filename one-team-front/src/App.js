import React, { Component } from "react";
import "./App.css";
import Connexion from "./components/authentication/Connexion";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";

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
