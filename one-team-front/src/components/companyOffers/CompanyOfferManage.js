import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./Button.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import renderHTML from "react-render-html";
import { Grid } from "@material-ui/core";
import { MakeCompletedUrl } from "../../tools";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";
import Team from "./Team";
import ConfirmDialog from "../Dialogs/ConfirmDialog";
import "./companyOffers.css";

class CompanyOfferManage extends Component {
  state = {
    show: false,
    open: false,
    title: ``,
    content: ``,
    button: ``,
    disabled: false
  };

  deleteData = () => {
    const { idMission } = this.props;
    const API_ENDPOINT_MISSION = MakeCompletedUrl("mission/");
    axios
      .delete(`${API_ENDPOINT_MISSION}${idMission}`, this.state)
      .then(res => {
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
    const { idMission } = this.props;
    const missionId = idMission;
    const companyId = sessionStorage.getItem("token");
    axios
      .put(MakeCompletedUrl(`mission/validate`), {
        missionId,
        companyId
      })
      .then(res => {
        this.setState({
          open: true,
          title: `Validation réussie`,
          content: `Vous avez validé votre Team, OneTeam a réceptionné votre demande et va contacter votre équipe pour l'entretien`,
          button: `Fermer`,
          disabled: true
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
    // console.log("close");
  };

  render() {
    const {
      titleMission,
      dateStart,
      dateEnd,
      description,
      modifMission,
      intro,
      isFull,
      town,
      LevelStudy
    } = this.props;

    const { title, content, button, open, disabled } = this.state;
    const descriptionToShow = description.substring(0, 300);
    // console.log("ma description ", description.substring(0, 20));

    // console.log("FULL", isFull);

    return (
      <div className="general_margin">
        <Paper>
          {/* ***** FICHE MISSION ***** */}

          <Grid container className="grid_manage_offer">
            <Grid item container xs={12} justify="flex-start">
              <p>LA MISSION</p>
            </Grid>
            <Grid item container xs={12} justify="flex-start">
              <p>{titleMission}</p>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              <Grid item xs={3}>
                <div>
                  <p>{town} </p>
                  <p>{this.props.company.companyName}</p>
                  <p>{LevelStudy} </p>
                  <p>{dateStart}</p>
                  <p>{dateEnd}</p>

                  {/* <p>{intro} </p>
                <Hidden xsDown>
                  <p>r{renderHTML(`${descriptionToShow} ...`)}</p>
                </Hidden> */}
                </div>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.showModal}
                >
                  Modifier
                </Button>
                <ConfirmDialog
                  buttonCaption="Supprimer"
                  dialogTitle="Confirmation"
                  dialogQuestion="Voulez-vous supprimer cette offre?"
                  handleOk={this.deleteData}
                />
                <CompanyCreateOffers
                  open={this.state.show}
                  onClose={this.showModal}
                  handlerUpdateMission={this.props.handlerUpdateMission}
                  modifMission={modifMission}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12} justify="center">
              <div className="div_hr">
                {/* <hr className="hr_horizontal_orange" /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* ****** ESPACE TEAM POUR L'ENTREPRISE ***** */}
              <Team {...this.props} disabled={disabled} />
              {disabled || isFull ? (
                <Button type="primary" disabled className="aws-btn validate">
                  Valider ma team
                </Button>
              ) : (
                <Button
                  onClick={this.validateMission}
                  variant="contained"
                  color="primary"
                >
                  Valider ma team
                </Button>
              )}
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
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default CompanyOfferManage;
