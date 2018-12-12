import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import CompanyOfferList from "./CompanyOfferList";
import "./Button.css";
import "./Missions.css";

class CompanyOffers extends Component {
  render() {
    return (
      <div className="mesMissions">
      <h3>Page gestion des offres company</h3>
        <h1 className="titleMission"> Mes offres </h1>
        <AwesomeButton type="primary" className="aws-btn add">
          Ajouter
        </AwesomeButton>
        <CompanyOfferList />
      </div>
    );
  }
}

export default CompanyOffers;
