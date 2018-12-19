import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TraineeCreateConnexion from "../authentication/studentCreateConnexion/TraineeCreateConnexion";
import CompanyCreateConnexion from "../authentication/companyCreateConnexion/CompanyCreateConnexion";

class Home extends Component {
  state = {
    openTrainee: false,
    openCompany: false,
    button: "fermer"
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
    return (
      <div>
        <h3>Page acceuil générale</h3>
        <button type="button" onClick={this.traineeOpenConnexion}>
          Trouver un stage
        </button>
        <button type="button" onClick={this.companyOpenConnexion}>
          Déposer une offre
        </button>
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
    );
  }
}

export default Home;
