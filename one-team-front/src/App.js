import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
=======
// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import ConnexionCompany from "./components/authentication/ConnexionCompany";
import CompanyCreateAccount from "./components/authentication/CompanyCreateAccount";
>>>>>>> bc462ca47c12d0cda1c06298484fe16efdaed200

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompanyOffers />
<<<<<<< HEAD
        {/* <StudentCreateAccount />
        <ConnexionTrainee /> */}
=======
        STUDENT
        <StudentCreateAccount />
        <ConnexionTrainee />
        COMPANY
        <CompanyCreateAccount />
        <ConnexionCompany />
>>>>>>> bc462ca47c12d0cda1c06298484fe16efdaed200
      </div>
    );
  }
}

export default App;
