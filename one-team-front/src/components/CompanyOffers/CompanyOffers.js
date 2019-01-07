import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import { connect } from "react-redux";
import axios from "axios";
import Modal from "./Modal";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";
import CompanyOfferManage from "./CompanyOfferManage";
import "./Button.css";
import "./Modal.css";
import "./Missions.css";
import "react-awesome-button/dist/styles.css";

class CompanyOffers extends Component {
  state = {
    show: false,
    missions: [],
    isLoaded: false
  };

  componentDidMount() {
    const { idCompany } = this.props;

    axios.get(`http://localhost:3001/company/${idCompany}`).then(res => {
      // console.log("data", res.data);
      this.setState({
        missions: res.data.Missions.sort((a, b) => a - b),
        isLoaded: true
      });
    });
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
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

  render() {
    const { missions, isLoaded } = this.state;
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
          <CompanyCreateOffers
            handlerCreateMission={this.handlerCreateMission}
          />
        </Modal>
        <div>
          {!isLoaded ? (
            <p> loading.. </p>
          ) : (
            missions.map((e, index) => (
              <div key={index}>
                <CompanyOfferManage
                  modifMission={e}
                  titleMission={e.titleMission}
                  dateStart={new Date(e.dateStart).toLocaleDateString()}
                  dateEnd={new Date(e.dateEnd).toLocaleDateString()}
                  description={e.description}
                  idMission={e.id}
                  handlerUpdateMission={this.handlerUpdateMission}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    idCompany: state.company.id
  };
};

export default connect(mapStateToProps)(CompanyOffers);
