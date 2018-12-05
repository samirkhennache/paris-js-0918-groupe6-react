import React, { Component } from "react";
import "./App.css";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompanyOffers />
        {/* <StudentCreateAccount />
        <ConnexionTrainee /> */}
      </div>
    );
  }
}

export default App;
