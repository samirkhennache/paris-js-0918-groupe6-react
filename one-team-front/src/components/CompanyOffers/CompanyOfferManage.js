import React, { Component } from "react";

import axios from "axios";
import { AwesomeButton } from "react-awesome-button";

import Modal from "./Modal";
import CompanyCreateOffers from "../CompanyCreateOffers/CompanyCreateOffers";

import "./Button.css";

class CompanyOfferManage extends Component {
  state = {
    show: false
  };

  deleteData = () => {
    const { idMission } = this.props;
    const API_ENDPOINT_MISSION = "http://localhost:3001/mission/";
    axios
      .delete(`${API_ENDPOINT_MISSION}${idMission}`, this.state)
      .then(alert("Mission supprimé"));
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    const { titleMissions, start, end, descrip, modifMission } = this.props;
    console.log("1", modifMission);

    return (
      <div>
        {/* ***** FICHE MISSION ***** */}
        <div>
          {titleMissions}
          <br />
          {start}
          <br />
          {end}
          <br />
          {descrip}
        </div>
        {/* ***** BOUTONS MODIF & SUPPRIMER MISSIONS ***** */}
        <AwesomeButton
          type="primary"
          className="aws-btn edit"
          action={this.showModal}
        >
          Modifier
        </AwesomeButton>
        <br />
        <AwesomeButton
          type="primary"
          className="aws-btn remove"
          action={this.deleteData}
        >
          Supprimer
        </AwesomeButton>

        <Modal onClose={this.showModal} show={this.state.show}>
          <CompanyCreateOffers mission={modifMission} />
        </Modal>
        <br />
        <hr align="center" width="50%" color="midnightblue" size="1" />
        {/* ****** ESPACE TEAM POUR L'ENTREPRISE ***** */}
        <AwesomeButton type="primary" className="aws-btn validate">
          Valider ma team
        </AwesomeButton>
        <hr align="center" width="90%" color="midnightblue" size="1" />
      </div>
    );
  }
}

export default CompanyOfferManage;
