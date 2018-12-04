import React, { Component } from "react";
import "./App.css";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentCreateAccount />
        <ConnexionTrainee />
      </div>
    );
  }
}

export default App;
