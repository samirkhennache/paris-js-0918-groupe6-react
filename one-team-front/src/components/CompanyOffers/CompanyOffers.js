import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

import CompanyOfferList from "./CompanyOfferList";
import Modal from "./Modal";
import CompanyCreateOffers from "../companyOffers/CompanyCreateOffers/CompanyCreateOffers";

import "./Button.css";
import "./Modal.css";
import "./Missions.css";

import "react-awesome-button/dist/styles.css";

class CompanyOffers extends Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    const editMission = {
      titleMission: "titi",
      dateStart: new Date().toLocaleDateString(),
      dateEnd: new Date().toLocaleDateString(),
      description: "",
      town: "",
      intro: "",
      companyId: 1,
      LevelStudyId: 1,
      id: 1
    };
    return (
      <div className="mesMissions">
        <h1 className="titleMission"> Mes missions </h1>
        <AwesomeButton
          type="primary"
          className="aws-btn add"
          action={this.showModal}
        >
          Ajouter
        </AwesomeButton>
        <br />
        <Modal onClose={this.showModal} show={this.state.show}>
          <CompanyCreateOffers />
        </Modal>
        <CompanyOfferList mission={editMission} />
      </div>
    );
  }
}

export default CompanyOffers;
