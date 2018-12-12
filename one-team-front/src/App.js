import React, { Component } from "react";
import CompanyCreateOffers from "./components/CompanyCreateOffers";
import "./App.css";

// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
import ConnexionTrainee from "./components/authentication/ConnexionTrainee";
import StudentCreateAccount from "./components/authentication/StudentCreateAccount";
import ConnexionCompany from "./components/authentication/ConnexionCompany";
import CompanyCreateAccount from "./components/authentication/CompanyCreateAccount";
<<<<<<< HEAD
import Search from "./components/search/Search2";
=======
import StudentOfferList from "./components/searchOffer/StudentOfferList";
import CompanyOfferList from "./components/CompanyOffers/CompanyOfferList";
>>>>>>> 6086597d3b3283647c8db0d72f03b7ed0d647bc7

class App extends Component {
  render() {
    const editMission = {
      title: "titi",
      startDate: new Date().toLocaleDateString(),
      endDate: new Date().toLocaleDateString(),
      descritpion: "",
      town: "",
      intro: "",
      companyId: 1,
      levelStudyId: 1,
      id: 1
    };

    return (
      <div className="App">
<<<<<<< HEAD
        <Search />
        <CompanyOffers />
        STUDENT
=======
        {/* <CompanyCreateOffers mission={editMission} />
        <CompanyCreateOffers />
        <CompanyOfferList mission={editMission} />
>>>>>>> 6086597d3b3283647c8db0d72f03b7ed0d647bc7
        <StudentCreateAccount />
        <StudentOfferList />
        <ConnexionTrainee />
        STUDENT
        <StudentCreateAccount />
        <ConnexionTrainee /> */}
        COMPANY
        <CompanyCreateAccount />
        <ConnexionCompany />
      </div>
    );
  }
}

export default App;
