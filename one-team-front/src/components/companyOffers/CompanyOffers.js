import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
// import Modal from "./Modal";
import CompanyOfferManage from "./CompanyOfferManage";
import CompanyCreateOffers from "./CompanyCreateOffers";
import "./Button.css";
// import "./Modal.css";
import "./Missions.css";
import "react-awesome-button/dist/styles.css";

// const idCompany = sessionStorage.getItem("token");
// const mode = "SELECT";

class CompanyOffers extends Component {
  state = {
    show: false,
    missions: []
  };

  componentDidMount() {
    const { missions } = this.props;
    this.setState({
      missions
    });
  }

  showModal = () => {
    const { show } = this.state;
    this.setState({
      ...this.state,
      show: !show
    });
  };

  handlerCreateMission = newMission => {
    // console.log("ajouter mission", newMission);
    this.setState({ missions: [...this.state.missions, newMission] });
  };

  handlerUpdateMission = updateMission => {
    // console.log("modif mission", updateMission);
    this.setState({
      missions: [
        ...this.state.missions.filter(e => e.id !== updateMission.id),
        updateMission
      ].sort((a, b) => a.id - b.id)
    });
  };

  handlerDeleteMission = idMission => {
    this.setState({
      missions: [...this.state.missions.filter(e => e.id !== idMission)]
    });
  };

  render() {
    const { missions } = this.state;
    return (
      <div className="mesMissions">
        <h1 className="titleMission"> Mes missions </h1>
        <p>Nombre de missions: {missions.length}</p>
        <AwesomeButton
          type="primary"
          className="aws-btn add"
          action={this.showModal}
        >
          Ajouter
        </AwesomeButton>
        <br />
        <CompanyCreateOffers
          open={this.state.show}
          onClose={this.showModal}
          handlerCreateMission={this.handlerCreateMission}
        />
        <div>
          {missions.map((e, index) => (
            <CompanyOfferManage
              key={index}
              modifMission={e}
              titleMission={e.titleMission}
              dateStart={new Date(e.dateStart).toLocaleDateString()}
              dateEnd={new Date(e.dateEnd).toLocaleDateString()}
              description={e.description}
              idMission={e.id}
              handlerUpdateMission={this.handlerUpdateMission}
              handlerDeleteMission={this.handlerDeleteMission}
              {...this.props}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyOffers;
