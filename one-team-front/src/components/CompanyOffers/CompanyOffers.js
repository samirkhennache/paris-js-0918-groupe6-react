import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import CompanyOfferList from "./CompanyOfferList";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";
import "./Button.css";
import "./Missions.css";

class CompanyOffers extends Component {
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
      <div className="mesMissions">
        <h3>Page gestion des offres company</h3>
        <h1 className="titleMission"> Mes offres </h1>
        <AwesomeButton type="primary" className="aws-btn add">
          Ajouter
        </AwesomeButton>
        <CompanyCreateOffers mission={editMission} />
        <CompanyOfferList mission={editMission} />
      </div>
    );
  }
}

export default CompanyOffers;
