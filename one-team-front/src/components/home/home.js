import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CompanyCreateOffers from "../CompanyCreateOffers";
import CompanyOffers from "../CompanyOffers/CompanyOffers";
import ConnexionTrainee from "../authentication/studentCreateConnexion/ConnexionTrainee";
import StudentCreateAccount from "../authentication/studentCreateConnexion/StudentCreateAccount";
import ConnexionCompany from "../authentication/companyCreateConnexion/ConnexionCompany";
import CompanyCreateAccount from "../authentication/companyCreateConnexion/CompanyCreateAccount";
import StudentOfferList from "../searchOffer/StudentOfferList";
import CompanyOfferList from "../CompanyOffers/CompanyOfferList";
import searchOffer from "../searchOffer/SearchOffer";
import TraineeCreateConnexion from "../authentication/studentCreateConnexion/TraineeCreateConnexion";

class Home extends Component {
  state = {
    open: false,
    button: "fermer"
  };

  openConnexion = () => {
    this.setState({
      open: true
    });
    console.log("openConnexion");
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // const editMission = {
    //   title: "titi",
    //   startDate: new Date().toLocaleDateString(),
    //   endDate: new Date().toLocaleDateString(),
    //   descritpion: "",
    //   town: "",
    //   intro: "",
    //   companyId: 1,
    //   levelStudyId: 1,
    //   id: 1
    // };
    const { open, button } = this.state;
    console.log(this.props);
    return (
      <div>
        <h3>Page acceuil générale</h3>
        <button type="button" onClick={this.openConnexion}>
          Trouver un stage
        </button>
        <button type="button">Déposer une offre</button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <TraineeCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>

        {/* <CompanyCreateOffers mission={editMission} />
        <CompanyCreateOffers />
        <CompanyOfferList mission={editMission} />
        <StudentCreateAccount />
        <StudentOfferList />
        <ConnexionTrainee />
        STUDENT
        <StudentCreateAccount />
        <ConnexionTrainee />
        COMPANY
        <CompanyCreateAccount />
        <ConnexionCompany /> */}
      </div>
    );
  }
}

export default Home;
