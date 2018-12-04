import React, { Component } from "react";
import "./App.css";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import ConnexionCompany from "./components/authentication/ConnexionCompany";
import CompanyCreateAccount from "./components/authentication/CompanyCreateAccount";
class App extends Component {
  render() {
    return (
      <div className="App">
        STUDENT
        <StudentCreateAccount />
        <ConnexionTrainee />
        COMPANY
        <CompanyCreateAccount />
        <ConnexionCompany />
      </div>
    );
  }
}

export default App;
