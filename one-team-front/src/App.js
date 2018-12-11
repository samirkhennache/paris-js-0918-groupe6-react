import React, { Component } from "react";
import "./App.css";

// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import ConnexionCompany from "./components/authentication/ConnexionCompany";
import CompanyCreateAccount from "./components/authentication/CompanyCreateAccount";
import Search from "./components/search/Search2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <CompanyOffers />
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
