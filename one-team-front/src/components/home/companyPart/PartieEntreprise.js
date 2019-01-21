import React, { Component } from "react";

import { Container, Row, Col } from "react-grid-system";

import Button from "@material-ui/core/Button";
import invitez from "../../../img/Invitez.png";
import invitez2 from "../../../img/Invitez2.png";
import vinci from "../../../img/vinci.png";
import engie from "../../../img/engie.png";
import laposte from "../../../img/laposte.png";
import sncf from "../../../img/sncf.png";
import types from "../../../img/missionType.png";
import "./PartieEntreprise.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import CompanyCreateConnexion from "../../authentication/companyCreateConnexion/CompanyCreateConnexion";
import CompanyCarrousel from "./CompanyCarrousel";
import Example from "./Example";
import Services from "./Services";

export default class PartieEntreprise extends Component {
  state = {
    openCompany: false,
    button: "fermer"
  };

  companyOpenConnexion = () => {
    this.setState({
      openCompany: true
    });
  };

  handleCloseCompany = () => {
    this.setState({ openCompany: false });
  };
  render() {
    const { openCompany, button } = this.state;
    console.log(this.props, "props Entreprise");

    return (
      <div>
        <div className="background-carrousel-company">
          <CompanyCarrousel />
          <Example />
        </div>
        <div className="background-services">
          <Services />
        </div>
        <div>
          <Button
            variant="contained"
            className="buttonMission"
            onClick={this.companyOpenConnexion}
          >
            Créer une mission
          </Button>

          {/* DIALOG COMPANY -----------------------------------------*/}
          <Dialog
            open={openCompany}
            onClose={this.handleCloseCompany}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <CompanyCreateConnexion {...this.props} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseCompany} color="primary">
                {button}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}
