import React, { Component } from "react";

import { Link } from "react-scroll";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import withMobileDialog from "@material-ui/core/withMobileDialog";

import TraineeCreateConnexion from "../../authentication/studentCreateConnexion/TraineeCreateConnexion";
import CompanyCreateConnexion from "../../authentication/companyCreateConnexion/CompanyCreateConnexion";

import logo from "../../../img/Logo.png";
import "./OnePage.css";

class OnePage extends Component {
  state = {
    openTrainee: false,
    openCompany: false,
    button: "Fermer"
  };

  traineeOpenConnexion = () => {
    this.setState({
      openTrainee: true
    });
  };

  companyOpenConnexion = () => {
    this.setState({
      openCompany: true
    });
  };

  handleCloseTrainee = () => {
    this.setState({ openTrainee: false });
  };

  handleCloseCompany = () => {
    this.setState({ openCompany: false });
  };

  render() {
    const { openTrainee, openCompany, button } = this.state;
    const { fullScreen } = this.props;

    return (
      // Header //
      <div className="div-block">
        <div className="Header">
          <div className="Header-overlay">
            <img className="logo" src={logo} alt="logoOneTeam" />
            <p className="connexion">
              <Link
                activeClass="active"
                to="section1"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                <a href="#section1" className="titleduO">
                  Pour les recruteurs
                </a>
              </Link>
              &nbsp;|&nbsp;
              <Link
                activeClass="active"
                to="section2"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                <a href="#section2" className="titleduO">
                  Pour les étudiants
                </a>
              </Link>
            </p>

            <h1 className="home_title">
              La 1ère plateforme de teams <br /> d'étudiants-stagiaires
            </h1>

            <Button
              variant="contained"
              className="buttonConnexion"
              onClick={this.companyOpenConnexion}
            >
              Déposer une offre de stage
            </Button>
            <Button
              variant="contained"
              className="buttonConnexion2"
              onClick={this.traineeOpenConnexion}
            >
              Postuler à une offre
            </Button>
          </div>
        </div>
        {/* DIALOG TRAINEE ---------------------------------------- */}
        <Dialog
          open={openTrainee}
          onClose={this.handleCloseTrainee}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen={fullScreen}
        >
          <DialogContent>
            <TraineeCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button
              className="classic_button_blue"
              size="large"
              onClick={this.handleCloseTrainee}
              color="primary"
            >
              {button}
            </Button>
          </DialogActions>
        </Dialog>

        {/* DIALOG COMPANY -----------------------------------------*/}
        <Dialog
          open={openCompany}
          onClose={this.handleCloseCompany}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen={fullScreen}
        >
          <DialogContent>
            <CompanyCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button
              className="classic_button_blue"
              size="large"
              onClick={this.handleCloseCompany}
              color="primary"
            >
              {button}
            </Button>
          </DialogActions>
        </Dialog>
        {/* <PartieEntreprise {...this.props} /> */}
      </div>
    );
  }
}
export default withMobileDialog()(OnePage);
