import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";

import CompanyOfferList from "./CompanyOfferList";
import Modal from "./Modal";
import CompanyCreateOffers from "../CompanyCreateOffers/CompanyCreateOffers";

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
        <CompanyOfferList />
        <br />
        <Modal onClose={this.showModal} show={this.state.show}>
          <CompanyCreateOffers />
        </Modal>
      </div>
    );
  }
}

export default CompanyOffers;
