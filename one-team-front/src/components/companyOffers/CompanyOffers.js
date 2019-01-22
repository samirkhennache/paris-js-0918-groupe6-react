import React, { Component } from "react";
// import Modal from "./Modal";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CompanyOfferManage from "./CompanyOfferManage";
import CompanyCreateOffers from "./CompanyCreateOffers";
import "./companyOffers.css";

class CompanyOffers extends Component {
  state = {
    show: false,
    missions: [],
    company: null
  };

  componentDidMount() {
    const { missions, company } = this.props;
    this.setState({
      missions,
      company
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
    const { missions, company } = this.state;
    // console.log("missions", missions);

    return (
      <div className="mesMissions">
        <div className="home-company">
          <div className="compnay-overlay">
            <div className="block-company">
              <h2>Ici, créer et gérer vos missions de stages</h2>
              <h2>Nombre de missions en cours : {missions.length}</h2>
              <Fab
                color="primary"
                size="large"
                aria-label="Add"
                variant="round"
                onClick={this.showModal}
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </div>
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
              isFull={e.isFull}
              intro={e.intro}
              company={company.companyName}
              town={e.town}
              LevelStudy={e.LevelStudy.label}
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
