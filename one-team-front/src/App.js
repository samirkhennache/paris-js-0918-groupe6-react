import React, { Component } from "react";
import CompanyCreateOffers from "./components/CompanyCreateOffers";
import "./App.css";
// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import ConnexionCompany from "./components/authentication/ConnexionCompany";
import CompanyCreateAccount from "./components/authentication/CompanyCreateAccount";
import StudentOfferList from "./components/searchOffer/StudentOfferList";
import CompanyOfferList from "./components/CompanyOffers/CompanyOfferList";
import StudentApplicationList from "./components/studentApplication/StudentApplicationList";


class App extends Component {
  render() {
    // const editMission = {
    //   title: "titi",
    //   startDate: new Date().toLocaleDateString(),
    //   endDate: new Date().toLocaleDateString(),
    //   descritpion: "",
    //   town: "",
    //   intro: "",
    //   companyId: 1,
    //   levelStudyId: 1,
    //   id: 1
    // };

    return (
      <div className="App">
        {/* <CompanyCreateOffers mission={editMission} />
        <CompanyCreateOffers />
        <CompanyOfferList mission={editMission} /> */}
        <StudentCreateAccount />
        <StudentOfferList />
        <ConnexionTrainee />
        STUDENT
        <StudentCreateAccount />
        <ConnexionTrainee />
        COMPANY
        <CompanyCreateAccount />
        <ConnexionCompany />
        <StudentApplicationList />
      </div>
    );
  }
}

export default App;
