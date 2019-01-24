import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import "./PartieEntreprise.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import CompanyCreateConnexion from "../../authentication/companyCreateConnexion/CompanyCreateConnexion";
import CompanyCarrousel from "./CompanyCarrousel";
import Example from "./Example";
import Services from "./Services";
import Recrutement from "./Recrutement";

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
          <Recrutement />
          <Button
            variant="contained"
            className="buttonMission"
            onClick={this.companyOpenConnexion}
          >
            Déposer une offre
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
        </div>
      </div>
    );
  }
}
