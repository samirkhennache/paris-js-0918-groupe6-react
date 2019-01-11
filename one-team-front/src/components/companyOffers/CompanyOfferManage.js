import React, { Component } from "react";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";
import Button from "@material-ui/core/Button";
import Team from "./Team";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";
import "./Button.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const idCompany = sessionStorage.getItem("token");

class CompanyOfferManage extends Component {
  state = {
    show: false,
    open: false,
    title: ``,
    content: ``,
    button: ``
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

  validateMission = () => {
    console.log("click validate");
    const { idMission } = this.props;
    const missionId = idMission;
    const companyId = sessionStorage.getItem("token");
    axios
      .put(`http://localhost:3001/mission/validate`, {
        missionId,
        companyId
      })
      .then(res => {
        this.setState({
          open: true,
          title: `Validation réussie`,
          content: `Vous avez validé votre Team, OneTeam a réceptionné votre demande et va contacter votre équipe pour l'entretien`,
          button: `Fermer`
        });
      })
      .catch(error => {
        if (error.response.status === 422) {
          this.setState({
            open: true,
            title: `Validation refusée`,
            content:
              "Votre team est incomplète, elle doit être de 3 étudiants minimum et de 5 étudiants maximum",
            button: `Fermer`
          });
        } else if (error.response.status === 404) {
          this.setState({
            open: true,
            title: `Validation refusée`,
            content:
              "Selectionnez des étudiants si vous souhaitez valider cette team !",
            button: `Fermer`
          });
        } else {
          this.setState({
            open: true,
            title: `Validation refusée`,
            content: "Une erreur s'est produite, veuillez recommencer",
            button: `Fermer`
          });
        }
      });
  };

  handleClose = () => {
    this.setState({ open: false });
    console.log("close");
  };

  render() {
    const {
      titleMission,
      dateStart,
      dateEnd,
      description,
      modifMission
    } = this.props;
    const { title, content, button, open } = this.state;

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
        <CompanyCreateOffers
          open={this.state.show}
          onClose={this.showModal}
          handlerUpdateMission={this.props.handlerUpdateMission}
        />
        <br />
        <hr align="center" width="50%" color="midnightblue" size="1" />
        {/* ****** ESPACE TEAM POUR L'ENTREPRISE ***** */}
        <Team {...this.props} />
        <AwesomeButton
          action={this.validateMission}
          type="primary"
          className="aws-btn validate"
        >
          Valider ma team
        </AwesomeButton>
        <hr align="center" width="90%" color="midnightblue" size="1" />
        {/* **************** DIALOG VALIDATE ************************** */}
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CompanyOfferManage;
