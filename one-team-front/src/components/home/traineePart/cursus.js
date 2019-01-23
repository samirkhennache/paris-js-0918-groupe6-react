import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import "./Cursus.css";
import homejob from "../../../img/icons/home-job.png";
import homemeeting from "../../../img/icons/home-meeting.png";
import homenotebook from "../../../img/icons/home-notebook.png";
import homeuser from "../../../img/icons/home-user.png";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TraineeCreateConnexion from "../../authentication/studentCreateConnexion/TraineeCreateConnexion";

class Cursus extends Component {
  state = {
    openTrainee: false,
    button: "fermer"
  };

  traineeOpenConnexion = () => {
    this.setState({
      openTrainee: true
    });
  };

  handleCloseTrainee = () => {
    this.setState({ openTrainee: false });
  };

  render() {
    const { openTrainee, button } = this.state;
    return (
      <div className="rules-bloc general_margin">
        <Grid container justify="center">
          <Grid item xs={12}>
            <h2 className="home_subsection_orange">Comment ça marche ?</h2>
            <hr className="hr_horizontal_orange_home" />
          </Grid>
          {/* *************** RULES 1 ********************* */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="rules-item">
              <div>
                <img src={homeuser} className="cursusImage" alt="1" />
              </div>
              <p className="icon_orange_title">Publie ton profil</p>
              <p>
                Après avoir créer ton compte, remplis ta fiche publique afin
                d’être visible auprès des recruteurs
              </p>
            </div>
          </Grid>
          {/* *************** RULES 2 ********************* */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="rules-item">
              <div>
                <img src={homejob} className="cursusImage" alt="2" />
              </div>
              <p className="icon_orange_title">Pas de CV standardisé</p>
              <p>
                Ni CV, ni lettre de motivation, parle nous de ton cursus
                d’études et de tes compétences personnelles et techniques. Dis
                nous ce qui te motive, ce en quoi tu crois et ce que tu veux
                apporter à une équipe.
              </p>
            </div>
          </Grid>
          {/* *************** RULES 3 ********************* */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="rules-item">
              <div>
                <img src={homenotebook} className="cursusImage" alt="3" />
              </div>
              <p className="icon_orange_title">1, 2, 3 postule !</p>
              <p>
                Candidate auprès des entreprises et des missions qui te
                plaisent.
              </p>
            </div>
          </Grid>
          {/* *************** RULES 4 ********************* */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="rules-item">
              <div>
                <img src={homemeeting} className="cursusImage" alt="4" />
              </div>
              <p className="icon_orange_title">Prépare ton entretien</p>
              <p>
                Lorsqu’une entreprise ta sélectioner au sein de sa team, un
                consultant OneTeam prépare les membres de l’équipe au premier
                entretien
              </p>
            </div>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          className="buttonTrainee"
          onClick={this.traineeOpenConnexion}
        >
          Créer son compte
        </Button>
        {/* DIALOG TRAINEE ---------------------------------------- */}
        <Dialog
          open={openTrainee}
          onClose={this.handleCloseTrainee}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <TraineeCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseTrainee} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Cursus;
