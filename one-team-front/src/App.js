import React, { Component } from "react";
import "./App.css";

// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";

import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StudentCreateAccount /> */}
        <CompanyOffers />

        <StudentCreateAccount />
        <ConnexionTrainee />
      </div>
    );
  }
}

export default App;
