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
import Edit from "@material-ui/icons/Edit";
import { MakeCompletedUrl } from "../../tools";
import CompanyCreateOffers from "./CompanyCreateOffers/CompanyCreateOffers";
import Team from "./Team";
import ConfirmDialog from "../Dialogs/ConfirmDialog";
import "./companyOffers.css";
import townCompany from "../../img/icons/placeholder-filled-point.png";
import school from "../../img/icons/graduate-cap.png";
import calendar from "../../img/icons/calendar-black.png";
import next from "../../img/icons/right-chevron(1).png";

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
        {/* ***** FICHE MISSION ***** */}

        <Paper container className="container_company_manage">
          <Grid item container xs={12} justify="flex-start">
            <p>LA MISSION</p>
          </Grid>
          <Grid item container xs={12} justify="flex-start">
            <p>{titleMission}</p>
          </Grid>
          <Grid container item xs={12} className="btn_border">
            <Grid item xs={12} md={6} lg={6}>
              <div>
                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={townCompany} alt="ville" />
                  </div>
                  <p className="criteres_big">{town} </p>
                </div>
                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={school} alt="école" />
                  </div>
                  <p className="criteres_big">{LevelStudy}</p>
                </div>
                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={calendar} alt="calendrier" />
                  </div>
                  <p className="criteres_big">{dateStart}</p>
                  <div className="img-student-view margin-chevron">
                    <img src={next} alt="chevron" />
                  </div>
                  <p className="criteres_big">{dateEnd}</p>
                </div>

                {/* <p>{intro} </p>
                <Hidden xsDown>
                  <p>r{renderHTML(`${descriptionToShow} ...`)}</p>
                </Hidden> */}
              </div>
            </Grid>
            <Grid
              item
              container
              xs={12}
              lg={6}
              md={6}
              alignItems="center"
              spacing={8}
            >
              <Grid item container xs={12} justify="flex-end">
                <Grid item lg={5} md={6} sm={4} xs={6}>
                  <Button
                    className="classic_button_orange btn_size"
                    onClick={this.showModal}
                  >
                    Modifier <Edit className="icon_Edit" />
                  </Button>
                </Grid>
              </Grid>
              <Grid item container xs={12} justify="flex-end">
                <Grid item lg={5} md={6} sm={4} xs={6}>
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
            </Grid>
          </Grid>
          <Grid item container xs={12} justify="center" />
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
        </Paper>
      </div>
    );
  }
}

export default CompanyOfferManage;
