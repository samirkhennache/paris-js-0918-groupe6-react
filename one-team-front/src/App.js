import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
=======
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
>>>>>>> 48f819334aebfa050c99a22e20a6f1e6cd898d81

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/* <StudentCreateAccount /> */}
        <CompanyOffers />
=======
        <StudentCreateAccount />
        <ConnexionTrainee />
>>>>>>> 48f819334aebfa050c99a22e20a6f1e6cd898d81
      </div>
    );
  }
}

export default App;
