import React, { Component } from "react";

import axios from "axios";
import { AwesomeButton } from "react-awesome-button";

import Modal from "./Modal";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";

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
      .then(res => {
        alert("Mission supprimé");
        this.props.handlerDeleteMission(idMission);
      });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    const {
      titleMission,
      dateStart,
      dateEnd,
      description,
      modifMission
    } = this.props;

    return (
      <div>
        {/* ***** FICHE MISSION ***** */}
        <div>
          {titleMission}
          <br />
          {dateStart}
          <br />
          {dateEnd}
          <br />
          {description}
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
          <CompanyCreateOffers
            mission={modifMission}
            handlerUpdateMission={this.props.handlerUpdateMission}
          />
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
